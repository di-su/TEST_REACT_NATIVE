import {useState, useEffect} from 'react';

function GetServicesFromApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}

export default GetServicesFromApi;
