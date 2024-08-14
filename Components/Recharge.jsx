import React, { useState, useRef } from 'react';
import './Recharge.css';
import PostpaidPage from './PostpaidPage';
import PrepaidPage from './PrepaidPage';
import DthPAge from './DthPage';
import FiberPage from './FiberPage';

// Dummy components for demonstration
const Prepaid = React.forwardRef((props, ref) =>
 <div ref={ref}>
    <PrepaidPage/>
    </div>);
const Postpaid = React.forwardRef((props, ref) => 
<div ref={ref}>
    <PostpaidPage/>
    </div>);
const DTH = React.forwardRef((props, ref) => 
<div ref={ref}>
    <DthPAge/>
    </div>);
const Fiber = React.forwardRef((props, ref) => 
<div ref={ref}>
    <FiberPage/>

</div>);

const Recharge = () => {
  const [activeTab, setActiveTab] = useState('Prepaid');

  // Create refs for the components
  const prepaidRef = useRef(null);
  const postpaidRef = useRef(null);
  const dthRef = useRef(null);
  const fiberRef = useRef(null);

  const handleTabClick = (tab, ref) => {
    setActiveTab(tab);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="recharge-section">
      <h2>Recharge or pay bills</h2>
      <div className="tabs">
        {['Prepaid', 'Postpaid', 'DTH', 'Fiber'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab, {
              'Prepaid': prepaidRef,
              'Postpaid': postpaidRef,
              'DTH': dthRef,
              'Fiber': fiberRef
            }[tab])}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="content">
        <Prepaid ref={prepaidRef} />
        <Postpaid ref={postpaidRef} />
        <DTH ref={dthRef} />
        <Fiber ref={fiberRef} />
      </div>
    </div>
  );
};

export default Recharge;
