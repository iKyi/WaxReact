export const baseApiUrl = "https://api.waxarena.io";
export const baseAtomicAssetsUrl =
  "https://wax.api.atomicassets.io/atomicassets/v1";
export const baseAtomicMarketUrl =
  "https://wax.api.atomicassets.io/atomicmarket/v1";

export const azureApiUrl = 'https://waxarena-api.azurewebsites.net/api/';
export const azureStagingUrl = 'https://waxarena-api-dev.azurewebsites.net/api/';

export const strapiUrl = "http://localhost:1337";
export const BannersUrl = 'https://api.waxarena.io/banners';


const APIURL = () => {
  return process.env.MODE === 'development' ? azureStagingUrl : azureApiUrl;
}

export { APIURL };