import Hero from '@/components/Hero';
import NewsTeller from '@/components/NewsTeller';
import Header from '@/components/Header';
import React from 'react';
import Latest from '../components/Latest';

const page = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <Latest/>
      <NewsTeller/>
      
    </div>
  );
};

export default page;