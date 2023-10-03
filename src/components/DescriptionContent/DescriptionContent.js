import './DescriptionContent.css';
import video from '../../assets/phone-video.mp4';


const DescriptionContent = () => {

  return (
    <section className="description">
      <div className="description-wrapper">
        <h2 className="description-text">
          How Does Korax AI Work?{' '}
          <span>
            Let me explain how I work - my primary role is to swiftly
            process vast volumes of data and make intelligent
            real-time trading decisions using economic.
          </span>
        <a href='/' style={{textAlign:'center'}}className="get-access description-info">
         More Info
        </a>
        </h2>
        <div className="description-img">
          <video
            autoPlay
            muted
            loop
            src={video}
            type="video/mp4"
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionContent;
