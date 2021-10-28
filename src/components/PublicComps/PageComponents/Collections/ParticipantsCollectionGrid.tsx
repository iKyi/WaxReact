import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../../../app/hooks";
import { LOADING_STATES } from "../../../../store/participants/participantsSlice";
import PublicAbsoluteLoaderComp from "../../PublicAbsoluteLoader/PublicAbsoluteLoader";
import ParticipantCollectionEntryComp from "./ParticipantCollectionEntry";

export type ParticipantsCollectionGridPropsType = {
  children?: any
}

const ParticipantsCollectionGridComp: React.VFC<ParticipantsCollectionGridPropsType> = ({ children }) => {

  const ParticipantsData = useAppSelector(state => state.participants.participants);
  const ParticipantsLoading = useAppSelector(state => state.participants.loading);

  return (
    <>
      <AnimatePresence>
        {ParticipantsLoading !== LOADING_STATES.LOADED && (
          <PublicAbsoluteLoaderComp />
        )}
      </AnimatePresence>

      {ParticipantsLoading === LOADING_STATES.LOADED && ParticipantsData.map(item => <ParticipantCollectionEntryComp key={item.collectionName} data={item} />)}
    </>
  )
}

export default ParticipantsCollectionGridComp