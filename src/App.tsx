import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [catData, setCatData] = useState<any>({});
  const [ipData, setIpData] = useState<any>({});
  const colors = ['green', 'blue', 'red', 'yellow', 'purple'];
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setCatData(data[0] as any))
      .catch((error) => console.error('Error fetching the cat data:', error));
  }, [apiKey]);

  useEffect(() => {
    fetch('https://a400edc8-3a7d-4029-a2c3-93404a266c9a.eu-central-1.cloud.genez.io') // ensure the correct endpoint
      .then((response) => response.json())
      .then((data) => {
        setIpData(data);
        console.log('IP Data:', data); // Check the data structure here
      })
      .catch((error) => console.error('Error fetching location data:', error));
  }, []);

  const changeBackgroundColor = () => {
    setColorIndex(colors.indexOf('green'));
  };

  const changeBackgroundColor1 = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const changeBackgroundColor2 = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColorIndex(randomIndex);
  };

  return (
    <>
      <h1>Caraua Alexandra</h1>
      <h1>Dumitru Bianca</h1>
     
      <div>
        {catData ? (
          <div>
            <img src={catData.url} alt="A Random Cat" width="500" />
          </div>
        ) : (
          <p>Loading cat data...</p>
        )}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={changeBackgroundColor}>Change background to green</button>
        <button onClick={changeBackgroundColor1}>Change background color</button>
        <button onClick={changeBackgroundColor2}>Change background to random color</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h2>
          {ipData.country}, {ipData.regionName}, {ipData.city}
        </h2>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
