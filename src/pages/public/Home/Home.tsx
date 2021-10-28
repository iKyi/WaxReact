import AboutBoxesComp from "../../../components/PublicComps/PageComponents/Home/AboutBoxes/AboutBoxes"

export type HomePropsType = {
  children?: any
}

const HomeComp: React.VFC<HomePropsType> = ({ children }) => {
  return (
    <>
      <AboutBoxesComp />
    </>
  )
}

export default HomeComp