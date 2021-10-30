
import BTCPic from '../../../assets/images/banner/btc.png';

export type BitcoinIconPropsType = {
  children?: any
}

const BitcoinIconComp: React.VFC<BitcoinIconPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <img src={BTCPic} alt="Bitcoin Icon"  className="currencyIcon" />
  )
}

export default BitcoinIconComp