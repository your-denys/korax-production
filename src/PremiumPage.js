import PremiumHome from './view/PremiumHome/PremiumHome';
import { useEffect, useState } from 'react';
import FixedHeader from './components/FixedHeader/FixedHeader';
import Subscription from './view/Subscription/Subscription';

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
      <Subscription/>
    </div>
  );
};

export default PremiumPage;
