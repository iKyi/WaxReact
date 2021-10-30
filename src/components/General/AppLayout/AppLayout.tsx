import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '../../../app/hooks';
import useWindowSize from '../../../hooks/useWindowSize';
import PublicAbsoluteLoaderComp from '../../PublicComps/PublicAbsoluteLoader/PublicAbsoluteLoader';
import './AppLayout.scss';
import AppFooterComp from './SubComp/AppFooter/AppFooter';
import AppHeaderComp from './SubComp/AppHeader/AppHeader';
import AppLeftNavComp from './SubComp/AppLeftNav/AppLeftNav';
import AppTopNavComp from './SubComp/AppTopNav/AppTopNav';

export type AppLayoutPropsType = {
  children?: any
}

const AppLayoutComp: React.VFC<AppLayoutPropsType> = ({ children }) => {

  // *************** HOOKS *************** //
  const windowSize = useWindowSize();

  // *************** STATE *************** //
  const loadingState = useAppSelector(state => state.appGeneral.loading);

  // *************** RENDER *************** //
  return (
    <motion.div className="appMainWrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <AnimatePresence>
        {loadingState && <PublicAbsoluteLoaderComp />}
      </AnimatePresence>
      <AppHeaderComp />
      {windowSize && windowSize.width && windowSize.width < 1025 && <AppTopNavComp />}
      <div className="appContentWrapper">
        {windowSize && windowSize.width && windowSize.width >= 1025 && <AppLeftNavComp />}
        <div className="cPage">
          <div className="pageInner">
            {children}
          </div>
        </div>
      </div>
      <AppFooterComp />
    </motion.div>

  )
}

export default AppLayoutComp