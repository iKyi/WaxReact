import './HomeHeroBox.scss';
import BannerBg from '../../../../../assets/images/banner/banner.png';
import BannerOne from '../../../../../assets/images/banner/bb1.png';
import BannerTwo from '../../../../../assets/images/banner/h6.png';
import BannerThree from '../../../../../assets/images/banner/a5.png';
import BannerFour from '../../../../../assets/images/banner/r7.png';
import BannerFive from '../../../../../assets/images/banner/bb2.png';
import BannerSix from '../../../../../assets/images/banner/u6.png';
import BitcoinIconComp from '../../../../General/Icons/BitcoinIcon';
import EthereumIconComp from '../../../../General/Icons/EthereumIcon';
import AEXPIconComp from '../../../../General/Icons/AEXPIcon';
import WaxIconComp from '../../../../General/Icons/WaxIcon';
import Manyline from '../../../../../assets/images/banner/manyline.png';
import CircleOne from '../../../../../assets/images/banner/circle1.png';
import CircleTwo from '../../../../../assets/images/banner/circle2.png';
import WhiteDot from '../../../../../assets/images/banner/whitedot.png';
import Play from '../../../../../assets/images/banner/play.png';
import { Button } from 'react-bootstrap';
import useScrollPosition from '../../../../../hooks/useScrollPosition';
import { motion } from 'framer-motion';


export type HomeHeroBoxPropsType = {
  children?: any
}


const HomeHeroBoxComp: React.VFC<HomeHeroBoxPropsType> = ({ children }) => {

  // *************** HOOKS *************** //
  const scrollPos = useScrollPosition();

  // *************** RENDER *************** //
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="banner-section bg bg_img" style={{ background: `url('${BannerBg}')` }}>
      <div className="banner-element-one my-paroller" style={{ transform: `translateX(${scrollPos / 3}%) translateY(${scrollPos / 20}%)` }} data-paroller-factor="0.1" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerOne} alt="element" />
      </div>
      <div className="banner-element-two my-paroller" style={{ transform: `translateX(-${scrollPos / 3}%) translateY(-${scrollPos / 20}%)` }} data-paroller-factor="0.05" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerTwo} alt="element" />
      </div >
      <div className="banner-element-three my-paroller" style={{ transform: `translateX(${scrollPos / 2}%) translateY(${scrollPos / 20}%)` }} data-paroller-factor="0.07" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerThree} alt="element" />
      </div >
      <div className="banner-element-four my-paroller" style={{ transform: `translateX(${scrollPos / 3}%) translateY(-${scrollPos / 20}%)` }} data-paroller-factor="0.07" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerFour} alt="element" />
      </div >
      <div className="banner-element-five my-paroller" style={{ transform: `translateX(${scrollPos / 3}%) translateY(-${scrollPos / 20}%)` }} data-paroller-factor="0.07" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerFive} alt="element" />
      </div >
      <div className="banner-element-six my-paroller" style={{ transform: `translateX(${scrollPos / 2}%) translateY(${scrollPos / 20}%)` }} data-paroller-factor="0.07" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerSix} alt="element" />
      </div >
      <div className="banner-element-seven my-paroller" style={{ transform: `translateX(-${scrollPos / 3}%) translateY(-${scrollPos / 20}%)` }} data-paroller-factor="0.07" data-paroller-type="foreground" data-paroller-direction="horizontal" >
        <img src={BannerFive} alt="element" />
      </div >
      <div className="banner-element-eight">
        <BitcoinIconComp />
      </div>
      <div className="banner-element-nine">
        <EthereumIconComp />
      </div>
      <div className="banner-element-ten">
        <img src={CircleTwo} alt="element" />
      </div>
      <div className="banner-element-eleven">
        <img src={CircleOne} alt="element" />
      </div>
      <div className="banner-element-twelve">
        <WaxIconComp />
      </div>
      <div className="banner-element-thirteen">
        <AEXPIconComp />
      </div>
      <div className="banner-element-fourteen">
        <AEXPIconComp />
      </div>
      <div className="banner-element-fifteen">
        <WaxIconComp />
      </div>
      <div className="banner-element-sixteen">
        <BitcoinIconComp />
      </div>
      <div className="banner-element-seventeen">
        <EthereumIconComp />
      </div>
      <div className="banner-element-eightteen">
        <img src={Manyline} alt="element" />
      </div>
      <div className="banner-element-nineteen">
        <img src={WhiteDot} alt="element" />
      </div>
      <div className="container">
        <div className="row align-items-center mb-30-none">
          <div className="col-lg-6 mb-30">
            <div className="banner-content">
              <h2 className="title headingFont">Epic Games Made for True Gamers!</h2>
              <span className="sub-title">One low monthly price.Cancel anytime.</span>
              <div className="banner-btn-area">
                <Button size="lg" className="cmn-btn">Sign up<i className="fas fa-long-arrow-alt-right"></i></Button>
                <Button size="lg" className="cmn-btn-border">Browse games</Button>
              </div>
              <div className="trial-area">
                <Button size="lg" className="cmn-btn-border"><span>Start Your Free 14 Days</span></Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="banner-video-area">
              <div className="banner-video-icon">
                <a className="popup-youtube mfp-iframe" href="https://www.youtube.com/watch?v=pOuW1dDFXxo">
                  <img src={Play} alt="video" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section >
  )
}

export default HomeHeroBoxComp