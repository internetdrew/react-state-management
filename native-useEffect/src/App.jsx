import { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(time);
      setTime(time => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch(`./names.json`)
      .then(res => res.json())
      .then(data => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = name => {
    fetch(`./${name}.json`)
      .then(res => res.json())
      .then(data => setSelectedNameDetails(data));
  };

  return (
    <div>
      <Stopwatch />
      <div>
        {names.map(name => (
          <button key={name} onClick={() => onSelectedNameChange(name)}>
            {name}
          </button>
        ))}
      </div>
      <div>{selectedNameDetails && JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
