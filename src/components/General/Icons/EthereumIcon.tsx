import ETHPic from '../../../assets/images/banner/eth.png';

export type EthereumIconPropsType = {
  children?: any
}

const EthereumIconComp: React.VFC<EthereumIconPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <img src={ETHPic} alt="Ethereum Icon" className="currencyIcon" />
  )
}

export default EthereumIconComp