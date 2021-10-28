import ParticipantsCollectionGridComp from "../../../components/PublicComps/PageComponents/Collections/ParticipantsCollectionGrid"

export type CollectionsPropsType = {
  children?: any
}

const CollectionsComp: React.VFC<CollectionsPropsType> = ({ children }) => {
  return (
    <>
      <h1>Collections</h1>

    <ParticipantsCollectionGridComp />
    </>
  )
}

export default CollectionsComp