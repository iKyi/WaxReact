import AboutBoxesComp from "../../../components/PublicComps/PageComponents/Home/AboutBoxes/AboutBoxes"
import FaqBoxesComp from "../../../components/PublicComps/PageComponents/Home/FaqBoxes/FaqBoxes"
import HomeHeroBoxComp from "../../../components/PublicComps/PageComponents/Home/HomeHeroBox/HomeHeroBox"

export type HomePropsType = {
  children?: any
}

const HomeComp: React.VFC<HomePropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <>
      <HomeHeroBoxComp />
      <AboutBoxesComp />
      <FaqBoxesComp />
    </>
  )
}

export default HomeComp