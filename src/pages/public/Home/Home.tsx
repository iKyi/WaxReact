import AboutBoxesComp from "../../../components/PublicComps/PageComponents/Home/AboutBoxes/AboutBoxes"
import FaqBoxesComp from "../../../components/PublicComps/PageComponents/Home/FaqBoxes/FaqBoxes"

export type HomePropsType = {
  children?: any
}

const HomeComp: React.VFC<HomePropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <>
      <AboutBoxesComp />
      <FaqBoxesComp />
    </>
  )
}

export default HomeComp