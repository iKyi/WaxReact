export interface ICollectionAtomicAtTemplateLevel {
  assets?: string,
  collection: {
    allow_notify: boolean,
    author: string,
    authorized_accounts: string[],
    collection_name: string,
    created_at_block: string,
    created_at_time: string,
    img: string,
    market_fee: number,
    name: string,
    notify_accounts: any[],
    formats?: {
      large: ICollectionImageFormat,
      medium: ICollectionImageFormat,
      small: ICollectionImageFormat,
      thumbnail: ICollectionImageFormat,
    }
  }
}
export interface ICollectionImageFormat {
  ext: string,
  hash: string,
  height: number,
  mime: string,
  name: string,
  path: string | null,
  size: number,
  url: string,
  width: number
}
export interface ICollectionLogo {
  provider?: any;
  alternativeText: string,
  caption: string,
  created_at: string,
  ext: string,
  formats: {
    large: ICollectionImageFormat,
    medium: ICollectionImageFormat,
    small: ICollectionImageFormat,
    thumbnail: ICollectionImageFormat,
  }
  hash: string,
  height: number;
  id: number,
  mime: string,
  name: string,
  previewUrl: string,
  provider_metadata: any,
  size: number,
  updated_at: string,
  url: string,
  width: number
}
export interface ILeftSideCollectionEntry {
  count: number;
  img: string;
  name: string;
  admin: boolean;
  power?: any;
  rootUrl?: string
}
export interface ICollectionAtomicFull {
  hash?: any,
  active: boolean,
  atomicHubUrl: string,
  author: string,
  collectionIpfsImage?: string,
  collectionLogo: ICollectionLogo,
  collectionName: string,
  collectionViewName: string | null,
  contactEmail: string | null,
  created_at: string,
  description: string,
  discord: string,
  displayName: string,
  displayOrder: number,
  id: number,
  includedFrom: string,
  includedUntil: string | null,
  published_at: string,
  schemata: any[],
  smallDescription: string,
  telegram: string,
  authorized_accounts?: string[],
  isCurrentuserAdmin?: boolean,
  userOwnedCount?: number;
  powerTotalCount?: number;
}
