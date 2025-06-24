import React from 'react';
import Dedicatedhero from '../Dedicatedpage/Dedicatedhero';
import Pricingtable from '../Dedicatedpage/Pricingtable';
import Pricingindia from '../Dedicatedpage/Pricingindia';
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';

const DedicatedServerindia = () => {
  return (
    <div>
      <Dedicatedhero />
      <Pricingtable />
      <Pricingindia />
      <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
        <Faqsection />
      </div>
      <div className="mt-20">
        <Clients />
      </div>
    </div>
  )
}

export default DedicatedServerindia;
