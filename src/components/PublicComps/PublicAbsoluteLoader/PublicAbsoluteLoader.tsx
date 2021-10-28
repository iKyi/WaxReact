import { motion } from "framer-motion"
import './PublicAbsoluteLoader.scss';


export type PublicAbsoluteLoaderPropsType = {
  children?: any
}

const PublicAbsoluteLoaderComp: React.VFC<PublicAbsoluteLoaderPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <motion.div className="preloader"
      key="publicLoader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  )
}

export default PublicAbsoluteLoaderComp