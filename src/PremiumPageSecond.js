import PremiumHome from './view/PremiumHome/PremiumHome';
import { useEffect, useState } from 'react';
import FixedHeader from './components/FixedHeader/FixedHeader';
import SubscriptionSecond from './view/SubscriptionSecond/SubscriptionSecond';
// import Statistic from './view/Statistic/Statistic';
import Description from './view/Description/Description';
import Faq from './view/Faq/Faq';
import PremiumContact from './view/PremiumContact/PremiumContact';

const PremiumPageSecond = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
     { scrolled && <FixedHeader />}
      <PremiumHome />
      <SubscriptionSecond/>
      <Description/>
      {/* <Statistic/> */}
      <Faq/>
      <PremiumContact/>
    </div>
  );
};

export default PremiumPageSecond;
