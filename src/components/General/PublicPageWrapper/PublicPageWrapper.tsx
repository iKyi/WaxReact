import PublicFooterComp from "../../PublicComps/PublicFooter/PublicFooter"
import PublicHeaderComp from "../../PublicComps/PublicHeader/PublicHeader"
import './pagePublicWrapper.scss';

export type PublicPageWrapperPropsType = {
  children?: any
}

const PublicPageWrapperComp: React.VFC<PublicPageWrapperPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <div className="d-flex flex-column h-100 publicWrapper">
      <PublicHeaderComp />
      {children}
      <PublicFooterComp />
    </div>
  )
}

export default PublicPageWrapperComp