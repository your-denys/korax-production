import { useState } from 'react';
import { motion } from 'framer-motion';
import statisticImg from '../../assets/statistic-img.png';
import statistic from '../../assets/statistic.png';
import statisticImgMob from '../../assets/statistic-img-mob.png';
import './StatisticContant.css';
import Modal from 'react-bootstrap/Modal';

const StatisticContant = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const isMobile = window.innerWidth <= 820;

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <section className="statistic">
      <h2 className="statistic-title">
        Last Month's Statistics for <br />
        "Trading For Everyone"
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      {!isMobile ? (
        <div className="statistic-responsive">
          <button onClick={() => handleShow(true)}>
            <img
              className="statistic-img"
              src={statistic}
              alt="Statistic"
            />
          </button>

          <Modal
            className="modal-statistic"
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton />
            <Modal.Body>
              <img
                style={{ width: '100%' }}
                src={statisticImg}
                alt="Statistic"
              />
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <div className="statistic-responsive">
          <img
            style={{ width: '100%' }}
            src={statisticImgMob}
            alt="Statistic"
          />
        </div>
      )}
      <p className="statistic-text">
        In the last month, Korax AI in the 'Trading For Everyone'
        suite has demonstrated a secure profit of <span>+115.57%</span>. This
        allows all of you to start profiting in the crypto market with
        AI as of today. Don't miss your chance to increase your
        portfolio every month.
      </p>
    </section>
  );
};

export default StatisticContant;
