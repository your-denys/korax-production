import './PremiumHomeContent.css';
import trading from '../../assets/tradnig.png';
import videoMob from '../../assets/welcomeMob.mp4';
import video from '../../assets/welcome.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import poster from '../../assets/poster.png';
import 'react-html5video/dist/styles.css';

const PremiumHomeContent = () => {
  const isMobile = window.innerWidth <= 820;
  return (
    <section className="premium-content">
      <img src={trading} alt="Trading for everyone" />
      <p className="premium-description">
        User-friendly AI tool for successful trading
      </p>
      <div className="premium-wrapper">
        <p className="premium-text">
          Welcome to the future of trading! I am Korax AI, your
          personal trading AI assistant, designed to revolutionize
          your approach to cryptocurrency trading and your income ...
        </p>
        {isMobile ? (
          <Video
            className="premium-video"
            controls={[]}
            poster={poster}
            width="60%"
            height="500px"
          >
            <source src={videoMob} type="video/mp4" />
          </Video>
        ) : (
          <Video
            className="premium-video"
            controls={[]}
            poster={poster}
            width="60%"
            height="500px"
          >
            <source src={video} type="video/mp4" />
          </Video>
        )}
      </div>
    </section>
  );
};

export default PremiumHomeContent;
