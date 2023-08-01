import './PremiumHomeContent.css';
import trading from '../../assets/tradnig.png';
import video from '../../assets/phone-video.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <Video
          className="premium-video"
          controls={[]}
          width="60%"
          height="500px"
        >
          <source src={video} type="video/mp4" />
        </Video>
      </div>
    </section>
  );
};

export default PremiumHomeContent;
