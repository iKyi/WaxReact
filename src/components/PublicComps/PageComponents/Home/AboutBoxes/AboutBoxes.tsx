import './aboutBoxes.scss';

import Icon1 from '../../../../../assets/images/aboutBox/icon-1.png';
import Icon2 from '../../../../../assets/images/aboutBox/icon-2.png';
import Icon3 from '../../../../../assets/images/aboutBox/icon-3.png';
import Icon4 from '../../../../../assets/images/aboutBox/icon-4.png';
import Icon5 from '../../../../../assets/images/aboutBox/icon-5.png';
import Icon6 from '../../../../../assets/images/aboutBox/icon-6.png';
import Icon7 from '../../../../../assets/images/aboutBox/icon-7.png';
import Icon8 from '../../../../../assets/images/aboutBox/icon-8.png';
import Icon9 from '../../../../../assets/images/aboutBox/icon-9.png';
import { Button } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';

export type AboutBoxesPropsType = {
  children?: any
}

const AboutBoxesComp: React.VFC<AboutBoxesPropsType> = ({ children }) => {

  const router = useHistory();

  return (
    <section className="about-section bg pt-120 pb-120" id="about">
      <div className="about-element-one">
        <img src={Icon1} alt="icon1" />
      </div>
      <div className="about-element-two">
        <img src={Icon2} alt="icon2" />
      </div>
      <div className="about-element-three">
        <img src={Icon3} alt="icon3" />
      </div>
      <div className="about-element-four">
        <img src={Icon4} alt="icon4" />
      </div>
      <div className="about-element-five">
        <img src={Icon5} alt="icon5" />
      </div>
      <div className="about-element-six">
        <img src={Icon5} alt="icon5" />
      </div>
      <div className="about-element-seven">
        <img src={Icon6} alt="icon6" />
      </div>
      <div className="about-element-eight">
        <img src={Icon7} alt="icon7" />
      </div>
      <div className="about-element-nine">
        <img src={Icon8} alt="icon8" />
      </div>
      <div className="about-element-ten">
        <img src={Icon9} alt="icon9" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center mb-5-none">
          <div className="col-lg-6">
            <div className="about-item-area">
              <div className="row justify-content-center mb-5-none">


                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="about-item text-center">
                    <div className="about-icon">
                      <img src="assets/images/about/about-1.png" alt="about" />
                    </div>
                    <h3 className="title">Great PC Games</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur tur adipiscing elit. </p>
                    <div className="about-btn">
                      <Button className="cmn-btn-border" onClick={() => router.push('/collections')}>
                        Read More<i className="fas fa-long-arrow-alt-right"></i>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="about-item about-item--style text-center mt-lg-5">
                    <div className="about-icon">
                      <img src="assets/images/about/about-2.png" alt="about" />
                    </div>
                    <h3 className="title">Platform for gaming</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur tur adipiscing elit. </p>
                    <div className="about-btn">
                      <Button className="cmn-btn-border" onClick={() => router.push('/collections')}>
                        Read More<i className="fas fa-long-arrow-alt-right"></i>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="about-item text-center">
                    <div className="about-icon">
                      <img src="assets/images/about/about-3.png" alt="about" />
                    </div>
                    <h3 className="title">Friends & community</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur tur adipiscing elit. </p>
                    <div className="about-btn">
                      <Button className="cmn-btn-border" onClick={() => router.push('/collections')}>
                        Read More<i className="fas fa-long-arrow-alt-right"></i>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="about-item about-item--style-two text-center mt-lg-5">
                    <div className="about-icon">
                      <img src="assets/images/about/about-4.png" alt="about" />
                    </div>
                    <h3 className="title">Customer service</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur tur adipiscing elit. </p>
                    <div className="about-btn">
                      <Button className="cmn-btn-border" onClick={() => router.push('/collections')}>
                        Read More<i className="fas fa-long-arrow-alt-right"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="about-content">
              <h3 className="sub-title">ABOUT Medforce</h3>
              <h2 className="title">Stunning artwork and gameplay unlike any other.</h2>
              <p>All the games, all the time. No additional purchases or revolving monthly catalogs. Play whatever you want, whenever you want, as many times as you want.</p>
              <p>vestibulum urna id, vulputate ipsum. Integer sodales nisl eget eros lacinia, varius pulvinar justo convallis. Ut id ante non quam viverra egestas vel ac eros. Morbi ac rutrum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="about-content-btn">
                <Button size="lg" className="cmn-btn" onClick={() => router.push('/collections')}>
                  Read Our Story<i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBoxesComp