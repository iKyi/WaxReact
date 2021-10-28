import AxiosInstace from "../../api/AxiosInstance";
import { AppThunk } from "../../app/store";
import { decompress, compress } from 'lz-string';
import { baseApiUrl } from "../../api/ApiUrl";
import { LOADING_STATES, setParticipants, setParticipantsLoadingState } from "./participantsSlice";
import { DateTime } from 'luxon';

Storage.prototype.setObj = function (key: string, obj: Record<any, any>) {
  return this.setItem(key, compress(JSON.stringify(obj)));
};
Storage.prototype.getObj = function (key: string) {
  const item = this.getItem(key);
  if (!item) {
    return null;
  }
  const decompressd = decompress(item);
  if (decompressd) {
    return JSON.parse(decompressd);
  } else {
    return null;
  }
};

export const loadParticipants = (): AppThunk<Promise<any>> => async (
  dispatch,
  getState
) => {
  dispatch(setParticipantsLoadingState(LOADING_STATES.LOADING));
  const localStorageData = localStorage.getObj('partCollectionsData');
  let participantsPackage = [];
  let localStorageVersion: any = localStorage.getObj('lastPUpdated');
  if (localStorageVersion) {
    localStorageVersion = DateTime.fromISO(localStorageVersion)
  } else {
    localStorageVersion = DateTime.fromISO('Sat Jul 31 1837 12:06:31 GMT+0300 (Eastern European Summer Time)')
  }
  const APIVersion: any = await AxiosInstace.get(`${baseApiUrl}/version-timestamp`).then((data: Record<any, any>) => {
    return DateTime.fromISO(data.data.updated_at);
  }).catch(err => {
    if (localStorageData) {
      participantsPackage = localStorageData;
    }
    console.log('API IS DOWN, YOUR COLLECTIONS INFORMATION MIGHT BE OUTDATED OR MISSING')
  });
  // version is different branch
  if (APIVersion && localStorageVersion.ts === APIVersion.ts && localStorageData) {
    console.log('No new participant data on API, using cached data');
    // VERSION IS SAME BRANCH
    participantsPackage = localStorageData;
  } else {
    const request = `${baseApiUrl}/collections`;
    console.log('STARTED - fetching participants data from API');
    const response = await AxiosInstace.get(`${request}?_sort=displayOrder%3AASC`).catch(err => {
      if (localStorageData) {
        console.log('API IS DOWN, YOUR COLLECTIONS INFORMATION MIGHT BE OUTDATED')
        return participantsPackage = localStorageData;
      } else {
        console.log('API IS DOWN, CACHED INFORMATION ABSENT, ERROR')
      }

    });
    if (response && response.status === 200) {
      let clone: any[] = response.data;
      clone = clone.map(collection => {
        delete collection.collectionIpfsImage;
        delete collection.collectionLogo?.formats?.large;
        delete collection.collectionLogo?.formats?.medium;
        delete collection.collectionLogo?.formats?.small;
        delete collection.collectionLogo?.hash;
        delete collection.collectionLogo?.created_at;
        delete collection.collectionLogo?.ext;
        delete collection.collectionLogo?.caption;
        delete collection.collectionLogo?.alternativeText;
        delete collection.collectionLogo?.mime;
        delete collection.collectionLogo?.name;
        delete collection.collectionLogo?.previewUrl;
        delete collection.collectionLogo?.provider_metadata;
        delete collection.collectionLogo?.provider;
        delete collection.collectionLogo?.id;
        delete collection.collectionLogo?.size;
        delete collection.collectionLogo?.height;
        delete collection.collectionLogo?.width;
        delete collection.collectionLogo?.updated_at;
        delete collection.hash;
        delete collection.created_at;
        delete collection.displayOrder;
        delete collection.includedFrom;
        delete collection.includedUntil;
        delete collection.published_at;
        collection.schemata = collection.schemata?.map((schem: any) => {
          delete schem.created_at;
          delete schem.published_at;
          schem.schemaTemplates = JSON.parse(schem.schemaTemplates);
          schem.schemaConfig = JSON.parse(schem.schemaConfig);

          return schem;
        })
        collection.atomicHubUrl = collection?.atomicHubUrl?.replace('https://wax.atomichub.io/explorer/collection', '');
        return collection;
      })
      participantsPackage = clone;
      localStorage.setObj('partCollectionsData', clone);
      localStorage.setObj('lastPUpdated', APIVersion);
      console.log('FINISHED - fetching participants data from API');
    }
  }
  participantsPackage = participantsPackage.map((participant: any) => {
    const latestDate: any = Math.max(
      ...participant.schemata.map((e: Record<any, any>) => {
        let init: any = DateTime.fromISO(e.updated_at);
        return init.ts
      }));
    participant.lastUpdatedBySchemata = DateTime.fromMillis(latestDate).toLocaleString(DateTime.DATETIME_SHORT);
    return participant;
  });
  // SENDS THE DATA TO THE STORE
  dispatch(setParticipants(participantsPackage));
  dispatch(setParticipantsLoadingState(LOADING_STATES.LOADED));
  return true

}
  ;