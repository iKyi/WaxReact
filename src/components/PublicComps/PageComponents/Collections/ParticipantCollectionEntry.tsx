import { IParticipantStoreEntry } from "../../../../interfaces/ParticipantStoreEntry"

export type ParticipantCollectionEntryPropsType = {
  children?: any,
  data: IParticipantStoreEntry
}

const ParticipantCollectionEntryComp: React.VFC<ParticipantCollectionEntryPropsType> = ({ children, data }) => {

  return (
    <div>
      {data.collectionName}
      <a href={data.telegram}>Telegram Url</a>
    </div>
  )
}

export default ParticipantCollectionEntryComp