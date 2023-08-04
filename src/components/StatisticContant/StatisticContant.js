import { useState } from 'react';
import { motion } from 'framer-motion';
import statisticImg from '../../assets/statistic.jpg';
import './StatisticContant.css';
import Modal from 'react-bootstrap/Modal';

const StatisticContant = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <section className="statistic">
      <h2 className="statistic-title">Lorem ipsum dolor sit amet</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      <div className="statistic-responsive">
        <button onClick={() => handleShow(true)}>
          <img
            className="statistic-img"
            src={statisticImg}
            alt="Statistic"
          />
        </button>

        <Modal
        className='modal-statistic'
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton/>
          <Modal.Body><img
            style={{width: '100%'}}
            src={statisticImg}
            alt="Statistic"
          /></Modal.Body>
        </Modal>
      </div>
      <p className="statistic-text">
        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
        ipsum dolor sit amet
      </p>
    </section>
  );
};

export default StatisticContant;
