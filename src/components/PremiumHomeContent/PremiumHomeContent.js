import './PremiumHomeContent.css';
import trading from '../../assets/tradnig.png';
import video from '../../assets/phone-video.mp4';
import { motion } from 'framer-motion';

const PremiumHomeContent = () => {
  return (
    <section className="premium-content">
      <h3 className="premium-subtitle">Lorem ipsum dolor sit amet</h3>
      <img src={trading} alt="Trading for everyone" />
      <p className="premium-description">
        Rorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="premium-wrapper">
        <p className="premium-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Maiores, delectus voluptas? Fuga dolores excepturi explicabo
          delectus libero blanditiis molestiae reiciendis commodi,
          dignissimos itaque consectetur accusamus velit repudiandae
          voluptates consequuntur voluptate expedita ab fugit nemo
          veniam odio accusantium totam quo vitae!
        </p>
        <video
          className="premium-video"
          src={video}
          type="video/mp4"
          controls
          width="60%"
          height="360"
          controlsList="nodownload"
        />
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
    </section>
  );
};

export default PremiumHomeContent;
