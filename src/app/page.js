import Hero from '@/components/Hero';
import NewsTeller from '@/components/NewsTeller';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <NewsTeller/>
      
    </div>
  );
};

export default page;