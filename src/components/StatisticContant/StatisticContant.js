import { motion } from 'framer-motion';
import statisticImg from '../../assets/statistic.jpg';
import './StatisticContant.css'
const StatisticContant = () => {
  return (
    <section className="statistic">
      <h2 className="statistic-title">Lorem ipsum dolor sit amet</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      <div className='statistic-responsive'>
      <img
        className="statistic-img"
        src={statisticImg}
        alt="Statistic"
      />
      </div>
      <p className="statistic-text">
        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
        ipsum dolor sit amet
      </p>
    </section>
  );
};

export default StatisticContant;
