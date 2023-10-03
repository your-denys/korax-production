import PremiumHome from './view/PremiumHome/PremiumHome';
import { useEffect, useState } from 'react';
import FixedHeader from './components/FixedHeader/FixedHeader';
import Subscription from './view/Subscription/Subscription';
import Statistic from './view/Statistic/Statistic';
import Description from './view/Description/Description';
import Faq from './view/Faq/Faq';
import PremiumContact from './view/PremiumContact/PremiumContact';
import Calculator from './view/Calculator/Calculator';

const PremiumPage = () => {
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
      <Statistic/>
      <Calculator/>
      <Subscription/>
      <Description/>
      <Faq/>
      <PremiumContact/>
    </div>
  );
};

export default PremiumPage;
