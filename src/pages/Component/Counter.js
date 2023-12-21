import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [uniqueVisitors, setUniqueVisitors] = useState(0);

    useEffect(() => {
      const visited = localStorage.getItem('visited');
  
      if (!visited) {
        const count = localStorage.getItem('uniqueVisitors');
        const newCount = count ? parseInt(count, 10) + 1 : 1;
  
        localStorage.setItem('visited', 'true');
        localStorage.setItem('uniqueVisitors', newCount.toString());
        setUniqueVisitors(newCount);
      } else {
        const count = localStorage.getItem('uniqueVisitors');
        setUniqueVisitors(count ? parseInt(count, 10) : 0);
      }
    }, []);

  return (
    <span>
      {uniqueVisitors}
    </span>
  );
};

export default Counter;
