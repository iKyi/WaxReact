import AEXPic from '../../../assets/images/banner/aexp.png';

export type AEXPIconPropsType = {
  children?: any
}

const AEXPIconComp: React.VFC<AEXPIconPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <img src={AEXPic} alt="AEXP Icon" className="currencyIcon" />
  )
}

export default AEXPIconComp