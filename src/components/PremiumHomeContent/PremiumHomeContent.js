import './PremiumHomeContent.css';
import trading from '../../assets/tradnig.png';
import videoMob from '../../assets/welcomeMob.mp4';
import video from '../../assets/welcome.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import poster from '../../assets/poster.jpg';
import 'react-html5video/dist/styles.css';

const PremiumHomeContent = () => {
  const isMobile = window.innerWidth <= 820;
  return (
    <section className="premium-content">
      <img src={trading} alt="Trading for everyone" />
      <p className="premium-description mob">
        Korax Presents New User-Friendly AI Tool For Succesful Trading
      </p>
      <div className="premium-wrapper">
        <a href='#premium' className="get-access">
         Get Access
        </a>
      <p className="premium-description pc">
        Korax Presents New User-Friendly AI Tool For Succesful Trading
      </p>
        {isMobile ? (
          <Video
            className="premium-video"
            controls={[]}
            poster={poster}
          >
            <source src={videoMob} type="video/mp4" />
          </Video>
        ) : (
          <Video
            className="premium-video"
            controls={[]}
            poster={poster}
          >
            <source src={video} type="video/mp4" />
          </Video>
        )}
      </div>
    </section>
  );
};

export default PremiumHomeContent;
