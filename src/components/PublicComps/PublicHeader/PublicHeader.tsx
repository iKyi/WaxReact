import { Link, NavLink } from "react-router-dom"
import PublicRoutes from "../../../router/publicRoutes"
import { Dropdown } from "react-bootstrap";
import './publicHeader.scss';
import WaxLogo from "../../../assets/images/logo.png";
import SocialMediaLinks from "../../../constants/socialMediaLinks";
import useScrollPosition from "../../../hooks/useScrollPosition";
import LoginBtnElemComp from "./LoginBtnElem";

export type PublicHeaderPropsType = {
  children?: any
}

const PublicHeaderComp: React.VFC<PublicHeaderPropsType> = ({ children }) => {

  // *************** HOOKS *************** //
  const scrollTop = useScrollPosition();

  // *************** RENDER *************** //
  return (
    <>
      <header className={`header ${scrollTop > 60 ? 'nav-fixed' : ''}`}>
        <div className="overlay"></div>
        <section className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="left-content">
                    <ul className="left-list">
                      <li>
                        <a href="wwww.google.com">
                          <i className="far fa-file-alt"></i>	Read our whitepaper
                        </a>
                      </li>
                    </ul>
                    <ul className="top-social-links">
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
                  <div className="right-content">
                    <ul className="right-list">
                      <li>
                        <a href="wwww.google.com">
                          <i className="fas fa-book"></i>	Getting Started
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mainmenu-area mainmenu-area2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand d-lg-none" to="/">
                    <img className="l2" src={WaxLogo} alt="WaxArena Logo" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse fixed-height" id="main_menu">
                    <div className="main-menu-inner">
                      <ul className="navbar-nav mr-auto">
                        {
                          PublicRoutes.slice(0, 4).map((item, index) => {
                            return (
                              <li className="nav-item" key={item.name + index}>
                                <NavLink to={item.path} className="nav-link" exact>
                                  {item.name}
                                </NavLink>
                              </li>
                            )
                          })
                        }

                      </ul>
                      <a className="navbar-brand  d-none d-lg-block" href="/">
                        <img className="l2" src={WaxLogo} alt="WaxArena Logo" />
                      </a>
                      <ul className="navbar-nav ml-auto righted">

                        <Dropdown as="li" className="nav-item dropdown">
                          <Dropdown.Toggle className="nav-link">
                            Game
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right"></i>Game Modes</a></li>
                            <li><a className="dropdown-item" href="bonuse-page.html"> <i className="fa fa-angle-double-right"></i>Characters</a></li>
                            <li><a className="dropdown-item" href="ticket-page.html"> <i className="fa fa-angle-double-right"></i>Equipment</a></li>
                            <li><a className="dropdown-item" href="raffles-details.html"> <i className="fa fa-angle-double-right"></i>Boosters</a></li>
                            <li><a className="dropdown-item" href="games_details.html"> <i className="fa fa-angle-double-right"></i>Upgrades</a></li>
                            <li><a className="dropdown-item" href="tournaments2.html"> <i className="fa fa-angle-double-right"></i>Ludus</a></li>
                            <li><a className="dropdown-item" href="gamer-profile1.html"> <i className="fa fa-angle-double-right"></i>Forge</a></li>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* <li className="nav-item">
                          <span className="cmn-btn cmn-btn-margin" data-toggle="modal" data-target="#signin"> Join us</span>
                        </li> */}
                        {
                          PublicRoutes.slice(4).map((item, index) => {
                            return (
                              <li className="nav-item" key={item.name + index}>
                                <NavLink to={item.path} className="nav-link">
                                  {item.name}
                                </NavLink>
                              </li>
                            )
                          })
                        }
                        <li className="nav-item">
                          <LoginBtnElemComp />
                        </li>
                      </ul>
                    </div>

                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default PublicHeaderComp