export interface IUALUser {
  accountName: string,
  api: Record<any, any>,
  chain: Record<any, any>,
  pubKeys: string[],
  requestPermission: string,
  rpc: Record<any, any>,
  wax: Record<any, any>
}

export interface IArenaUser {
  userName: string,
  email: string,
  emailConfirmed: false,
  blocked: false,
  totalPP: number,
  characterPoolPP: number,
  aexp: number,
  miningSpeed: number,
  dailyAexp: number,
  pubKeys: any[] | null,
  createdAt: string,
  aexpLastUpdated: string,
  ppLastUpdated: string,
  characterPoolPPLastUpdated: string,
  avatarUrl: string,
  displayName: string,
  partitionKey: string,
  rowKey: string,
  timestamp: string,
  eTag: string
  totalStakedAEXP: number,
  membershipCardsUnlocked: number,
  membershipCardsBought: number,
  aexpSpent: number,
  aexpClaimLimitReset: any,
  aexpClaimed: number,
  aexpTokenBalance: number,
  isWhitelisted: boolean,
  giveawayUnlocked?: boolean,
  nextTrainingSession?: string,
  trainingCharacterId?: null | string,
  hourlyAexp?: number | null
}