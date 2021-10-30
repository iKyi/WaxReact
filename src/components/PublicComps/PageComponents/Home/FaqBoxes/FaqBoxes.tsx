import './FaqBoxes.scss';

import AEXPIconComp from "../../../../General/Icons/AEXPIcon"
import BitcoinIconComp from "../../../../General/Icons/BitcoinIcon"
import EthereumIconComp from "../../../../General/Icons/EthereumIcon"
import WaxIconComp from "../../../../General/Icons/WaxIcon"

import Icon1 from '../../../../../assets/images/join/icon-1.png';
import Icon2 from '../../../../../assets/images/join/icon-2.png';
import Icon3 from '../../../../../assets/images/join/icon-3.png';
import Icon4 from '../../../../../assets/images/join/icon-4.png';

import Faq from '../../../../../assets/images/faq/faq.png';

import { Accordion } from 'react-bootstrap';
import { useState } from 'react';

export type FaqBoxesPropsType = {
  children?: any
}

interface IAccordionItem {
  title: string,
  content: string,
}

const AccordionMockItems: IAccordionItem[] = [{
  content: `The base requirement is to simply have an internet connection in order to run gamio. Our downloading system will decide how much of the game to download before starting a game based upon your connection.

  This means that if you have a fast connection, the games will start up faster due to downloading less. If you have a slow connection, the games will start up slower due to downloading more, but this is to ensure that you have no issues while you play no matter what connection speed you have.
  
  If you would like further information about how this system works, please send an email to support@medforce.com.`,
  title: 'Does Utomik Work On Mobile,Mac And Windows?'
},
{
  title: `What Kind Of Games Are On Gamio?`,
  content: `The base requirement is to simply have an internet connection in order to run gamio. Our downloading system will decide how much of the game to download before starting a game based upon your connection.

  This means that if you have a fast connection, the games will start up faster due to downloading less. If you have a slow connection, the games will start up slower due to downloading more, but this is to ensure that you have no issues while you play no matter what connection speed you have.
  
  If you would like further information about how this system works, please send an email to support@medforce.com.`
},
{
  title: `What Internet Speed Do I Need For Gamio?`,
  content: `The base requirement is to simply have an internet connection in order to run gamio. Our downloading system will decide how much of the game to download before starting a game based upon your connection.

  This means that if you have a fast connection, the games will start up faster due to downloading less. If you have a slow connection, the games will start up slower due to downloading more, but this is to ensure that you have no issues while you play no matter what connection speed you have.
  
  If you would like further information about how this system works, please send an email to support@medforce.com.`
}, {
  title: 'Can I Play As Much As I Want?',
  content: `The base requirement is to simply have an internet connection in order to run gamio. Our downloading system will decide how much of the game to download before starting a game based upon your connection.

  This means that if you have a fast connection, the games will start up faster due to downloading less. If you have a slow connection, the games will start up slower due to downloading more, but this is to ensure that you have no issues while you play no matter what connection speed you have.
  
  If you would like further information about how this system works, please send an email to support@medforce.com.`
}
]

const FaqBoxesComp: React.VFC<FaqBoxesPropsType> = ({ children }) => {

  // *************** LOCAL STATE *************** //
  const [activeTab, setActiveTab] = useState<number>(0);

  // *************** RENDER *************** //
  return (
    <section className="join-section bg pt-120 pb-120">
      <div className="join-element-one">
        <img src={Icon1} alt="icon" />
      </div>
      <div className="join-element-two">
        <img src={Icon2} alt="icon" />
      </div>
      <div className="join-element-three">
        <img src={Icon3} alt="icon" />
      </div>
      <div className="join-element-four">
        <img src={Icon4} alt="icon" />
      </div>
      <div className="join-element-five">
        <WaxIconComp />
      </div>
      <div className="join-element-six">
        <AEXPIconComp />
      </div>
      <div className="join-element-seven">
        <BitcoinIconComp />
      </div>
      <div className="join-element-eight">
        <WaxIconComp />
      </div>
      <div className="join-element-nine">
        <AEXPIconComp />
      </div>
      <div className="join-element-ten">
        <BitcoinIconComp />
      </div>
      <div className="join-element-eleven">
        <WaxIconComp />
      </div>
      <div className="join-element-twelve">
        <AEXPIconComp />
      </div>
      <div className="join-element-thirteen">
        <EthereumIconComp />
      </div>
      <div className="join-element-fourteen">
        <WaxIconComp />
      </div>
      <div className="join-element-fifteen">
        <AEXPIconComp />
      </div>
      <div className="join-element-sixteen">
        <EthereumIconComp />
      </div>
      <div className="faq-section bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-header">
                <h3 className="sub-title">HOW CAN WE HELP?</h3>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-lg-8 mb-30">
              <Accordion
                activeKey={activeTab.toString()}
                flush className="faq-wrapper">
                {AccordionMockItems.map((entry, index) => {
                  return (
                    <Accordion.Item key={entry.title} eventKey={index.toString()} as="div" className={`faq-item ${activeTab === index ? ' open' : ''}`}>
                      <button className="faq-title"
                        onClick={() => setActiveTab(index)}
                      >
                        <span className="title">{entry.title}</span>
                        <span className="right-icon" />
                      </button>
                      <Accordion.Body className="faq-content">
                        {entry.content}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="faq-thumb">
                <img src={Faq} alt="faq" />
              </div>
            </div>
          </div>
          <div className="faq-bottom-area">
            <div className="row justify-content-center">
              <p>Do not hesitate to <span>contact us</span> if you have any questions about our pricing plans. We're here to help  and don’t forget to check the <span>FAQ page.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default FaqBoxesComp