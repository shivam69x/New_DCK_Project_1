import React from 'react'
import Heroforeign from "../VPS/Heroforeign";
import Faqsection from '../components/Faqsection';
import Clients from '../components/Clients';
import Planforeign from '../VPS/Planforeign';
import Features from '../VPS/Features';

const Vpsforeign = () => {
    return (
        <>
            <Heroforeign />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Planforeign />
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

export default Vpsforeign;
