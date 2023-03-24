const getAverage = (arr) => {
    //sum the values from the Array
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    //get the length of the Array
    //divide the array sum by the length
    return sum / arr.length;
  };
  
  console.log(getAverage([1, 2, 3, 4, 8, 7, 9]));
  