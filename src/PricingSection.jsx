// PricingSection.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

const PricingSection = () => {

  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Adjust the width threshold as needed
    };

    // Initial check
    handleResize();

    // Update the state on resize
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const pricingPlans = [
    {
      title: 'Just starting out',
      price: '3000',
      description: 'Suitable for pre-revenue organisations looking to garner support, approach investors and enter the market.',
      features: [
        '8 hrs of servicing per week',
'Branding, marketing and PR support',
'2 hrs of calls a week'


      ],
    },
    {
      title: 'Hit the ground running',
      price: '6000',
      description: 'Suitable for newly-established organisations that are ready to generate revenue and expand their customer base.',
      features: [
       ' 16 hrs of servicing per week',
       ' Branding, marketing and PR support',
        'Actionable strategies for growth',
        
        '3 hrs of calls a week'
      ],
    },
    {
      title: 'All hands on deck',
      price: '9000',
      description: 'Suitable for reputable organisations that are ready to pursue an aggressive growth strategy.',
      features: [
       ' 24 hrs of servicing per week',
'Branding, marketing and PR support',

'Representation at 1 professional event a month',
'4 hrs of calls a week'


      ],
    },
  ];

  return (
    <div data-scroll className="pricing-section">
      {pricingPlans.map((plan, index) => (
        <div key={index}   className="pricing-card">
          <div data-scroll data-scroll-speed="1" className="pricing-card-body">
            <h4>What's included</h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓  {feature}</li>
              ))}
            </ul>
          </div>
          <div className="pricing-card-header">
            <h3>{plan.title}</h3>
          
            
            <p>{plan.description}</p>
            {/* <h2> <span className='pound'>£</span>{plan.price} <span className='mon'>/month</span></h2> */}
            <p className='cancel-any' >Pause or cancel anytime</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
