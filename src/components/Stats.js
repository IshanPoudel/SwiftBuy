import React, { useEffect, useState } from 'react';

const StatisticsPage = () => {
  const [apiCalls, setApiCalls] = useState(0);

  useEffect(() => {
    // Make an API call to fetch the number of times it has been called
    // Update the 'apiCalls' state with the response data

    // Example code to simulate API call
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/stats');
        const data = await response.json();
        setApiCalls(data.apiCalls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">API Calls Statistics</h1>
      <p className="text-lg">Total API Calls: {apiCalls}</p>
    </div>
  );
};

export default StatisticsPage;
