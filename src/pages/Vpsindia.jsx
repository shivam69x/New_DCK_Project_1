import React from 'react'
import Heroindia from "../VPS/Heroindia";
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';
import Planindia from '../VPS/Planindia';
import Features from '../VPS/Features';

const Vpsindia = () => {
    return (
        <>
            <Heroindia />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Planindia />
            </div>
            <Features />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Faqsection />
            </div>
            <div className="mt-20">
                <Clients />
            </div>
        </>
    )
}

export default Vpsindia;
