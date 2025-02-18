const reportWebVitals = (onPerfEntry) => {
  
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      // Dynamically importing web-vitals for performance metrics
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Passing the performance metrics to the onPerfEntry function
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }).catch((error) => {
        console.error('Error loading web-vitals library:', error);
      });
    } catch (error) {
      console.error('Error with web-vitals report:', error);
    }
  }
};

export default reportWebVitals;
