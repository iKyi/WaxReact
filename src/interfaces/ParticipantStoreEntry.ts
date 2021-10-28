import { ICollectionImageFormat } from "./CollectionTypes";

export interface IParticipantStoreEntry {
  id: number,
  collectionName: string,
  author: string,
  website: string,
  twitter: string,
  discord: string,
  telegram: string,
  active: boolean,
  contactEmail: string | null,
  collectionViewName: string | null,
  smallDescription: string | null,
  description: string | null,
  updated_at: string,
  displayName: string,
  atomicHubUrl: string,
  formats?: {
    large: ICollectionImageFormat,
    medium: ICollectionImageFormat,
    small: ICollectionImageFormat,
    thumbnail: ICollectionImageFormat,
  },
  schemata: ISchemata[]
}

export interface ISchemata {
  id: number,
  schemaName: string,
  schemaTemplates: ISchemataTemplate[],
  active: boolean,
  templateExcludes: string,
  updated_at: string,
  parentCollection: number,
  schemaConfig: ISchemaConfig
}

export interface ISchemaConfig {
  volume: number,
  cpf: number,
  totalAssets: number,
  rarityFieldName: string,
  useTemplates: boolean,
  rarities: ISchemaRarity[]
}

export interface ISchemaRarity {
  level: string,
  assignedPp: number,
  assets: number,
  cf: number,
  factor: number,
  calculatedPp: number,
  cap: number,
  ignoreCalculation: boolean
}

export interface ISchemataTemplate {
  template_id: string,
  ppValue: number,
  cap: number
  immutable_data: {
    img: string,
    name: string,
    rarity: string,
    backimg: string,
    description: string,
  }
}