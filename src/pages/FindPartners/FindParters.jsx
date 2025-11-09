import React from 'react';
import PartnerCard from '../../components/PartnerCard';

const FindParters = () => {
    return (
        <div>
           . <div className="">
            <h1 className='text-3xl text-primary text-center font-bold'>
                Find Your Partner
            </h1>
           </div>
           <div className="divider"></div>
            <main className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
            </main>
        </div>
    );
};

export default FindParters;