import { useState } from 'react';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';


const LogIn = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate('../');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <>
    <Header/>
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="platform"
    >
      <form className="platform-form" onSubmit={handleSubmit}>
        <h2 className="modal-title">Log In</h2>
        <motion.div
          viewport={{ amount: 0.3 }}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.7, delay:0.2 }}
          style={{marginRight: 'auto'}}
          className="border-dashed mb-4"
        ></motion.div>
        {login && <p className="mb-4 mr-auto">User is not found</p>}
        <div className="input-wrapper">
          <label>
            {' '}
            Email
            <div>
              <input className="input" type="email" required />
            </div>
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            {' '}
            Password
            <div>
              <input className="input" type="password" required />
            </div>
          </label>
        </div>
        <div className="modal-footer">
          <button className="back-button" onClick={goBack}>
          Back
          </button>
          <button type="submit" className="log-in-button">
            Log In{' '}
          </button>
        </div>
      </form>

    </motion.div>
    </>
  );
};

export default LogIn;
