import React, { useState } from 'react';

const Filter = () => {
  const [ageRange, setAgeRange] = useState([18, 70]);
  const [distanceRange, setDistanceRange] = useState([1, 50]);

  const handleAgeChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setAgeRange(value);
  };

  const handleDistanceChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setDistanceRange(value);
  };

  const applyFilters = () => {
    // Logic to filter data based on ageRange and distanceRange
    console.log(`Filtering users between ages ${ageRange[0]} to ${ageRange[1]} and within  ${distanceRange[40]} km`);
  };

  return (
    <div className='container-fuid vh-100 gap-3  d-flex flex-column align-items-center home'>
      <h3><b>Filters</b></h3>
      <br />
      <div className='admire'> <h3  >Interested in</h3> <h3> Admire most</h3> </div>
    <div className="filter">
   <div className='filterbutton'>
  <button className="btn btn-Light filter-button">Woman</button>
  <button className="btn btn-Light filter-button">Man</button>
  <button className="btn btn-Light filter-button">Both</button>

  </div>
    <div className='filterbutton'>
  <button className="btn btn-Light filter-button">Friendship</button>
  <button className="btn btn-Light filter-button">Comapanion</button>
  <button className="btn btn-Light filter-button">Both</button>
    
  </div>
    
     </div>
     <div>
        <fieldset>Location
            <form action="">
                <input style={{ height:'50px', width:'800px',borderRadius:'20px'}} type="text" />
            </form>
        </fieldset>
    </div> 
      <div className='filter'>
        <div className='age'>
        <label> <b>Age</b></label>
        <input
          type="range"
          min="18"
          max="70"
          value={ageRange.join(',')}
          onChange={handleAgeChange}
          step="1"
          style={{ width: '100%' }}
        />
        </div>
        <span>{`${ageRange[0]} - ${ageRange[1]} years`}</span>

        
        <div className='distance'>
        <label><b>Distance</b></label>
        <input
          type="range"
          min="50"
          
          value={distanceRange.join(',')}
          onChange={handleDistanceChange}
          step="1"
          style={{ width: '100%' }}
        />
        </div>
        <span>{`${distanceRange[0]} - ${distanceRange[1]} km`}</span>
      </div>

      <div><button onClick={applyFilters} className='btn btn-info' style={{width:'300px',marginTop:'80px' }}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;