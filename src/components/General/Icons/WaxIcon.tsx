import WAXPic from '../../../assets/images/banner/wax.png';

export type WaxIconPropsType = {
  children?: any
}

const WaxIconComp: React.VFC<WaxIconPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <img src={WAXPic} alt="Wax Icon" className="currencyIcon" />
  )
}

export default WaxIconComp