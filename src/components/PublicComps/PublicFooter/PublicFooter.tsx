import './publicFooter.scss';


import Logo from '../../../assets/images/logo.png';

import FooterOne from '../../../assets/images/footer/footer-element-one.png';
import FooterTwo from '../../../assets/images/footer/footer-element-two.png';
import Circle3 from '../../../assets/images/footer/circle3.png';
import DotLine from '../../../assets/images/footer/dotline.png';
import Manyline from '../../../assets/images/footer/manyline.png';

import LoginBtnElemComp from '../PublicHeader/LoginBtnElem';
import { Link } from 'react-router-dom';
import SocialMediaLinks from '../../../constants/socialMediaLinks';
import BitcoinIconComp from '../../General/Icons/BitcoinIcon';
import WaxIconComp from '../../General/Icons/WaxIcon';
import AEXPIconComp from '../../General/Icons/AEXPIcon';


export type PublicFooterPropsType = {
  children?: any
}

const PublicFooterComp: React.VFC<PublicFooterPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <footer className="mt-auto">
      <section className="footer-section bg bg_img" data-background="assets/images/footer-bg.png">
        <div className="footer-element">
          <a href="tel:123456789">
            <img src="assets/images/discord_icon.png" alt="discord" />
          </a>
        </div>
        <div className="footer-element-one">
          <img src={FooterOne} alt="element" />
        </div>
        <div className="footer-element-two">
          <img src={FooterTwo} alt="element" />
        </div>
        <div className="footer-element-three">
          <BitcoinIconComp />
        </div>
        <div className="footer-element-four">
          <BitcoinIconComp />
        </div>
        <div className="footer-element-five">
          <BitcoinIconComp />
        </div>
        <div className="footer-element-six">
          <BitcoinIconComp />
        </div>
        <div className="footer-element-seven">
          <BitcoinIconComp />
        </div>
        <div className="footer-element-eight">
          <WaxIconComp />
        </div>
        <div className="footer-element-nine">
          <WaxIconComp />
        </div>
        <div className="footer-element-ten">
          <WaxIconComp />
        </div>
        <div className="footer-element-eleven">
          <WaxIconComp />
        </div>
        <div className="footer-element-twelve">
          <AEXPIconComp />
        </div>
        <div className="footer-element-thirteen">
          <img src={Manyline} alt="element" />
        </div>
        <div className="footer-element-fourteen">
          <AEXPIconComp />
        </div>
        <div className="footer-element-fifteen">
          <AEXPIconComp />
        </div>
        <div className="footer-element-sixteen">
          <AEXPIconComp />
        </div>
        <div className="footer-element-seventeen">
          <img src={Circle3} alt="element" />
        </div>
        <div className="footer-shape">
          <img src={DotLine} alt="element" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-content">
                <h3 className="sub-title">Subscribe to Medforce</h3>
                <h2 className="title">To Get Exclusive Benefits</h2>
                <form className="footer-form">
                  <input type="email" name="email" placeholder="Your Email Address" />
                  <input type="submit" className="cmn-btn" value="Subscribe" />
                </form>
                <p>We respect your privacy, so we never share your info</p>
              </div>
              <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={Logo} alt="WaxArena Logo" />
                  </Link>
                </div>
                <div className="footer-btn">
                  <LoginBtnElemComp />
                </div>
              </div>
              <div className="copyright-area d-flex flex-wrap justify-content-between">
                <div className="copyright-content">
                  <p>Copyright © 2021.All Rights Reserved By <Link to="/">WaxArena</Link></p>
                </div>
                <ul className="blog-social">
                  {SocialMediaLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} rel="noreferrer" target="_blank">
                          <i className={`fab fa-${item.icon}`}></i>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer >
  )
}

export default PublicFooterComp