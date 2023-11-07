import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Latest from '../components/Latest';
import Footers from '../components/Footers';

const page = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <Latest/>
      <Footers/>
    
    </div>
  );
};

export default page;