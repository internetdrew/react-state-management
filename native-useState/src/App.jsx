import { useState } from 'react';

const NameList = () => {
  const [list, setList] = useState(['Jack', 'Jill', 'John']);
  const [name, setName] = useState('');

  const addName = () => {
    setList([...list, name]);
    setName('');
  };

  return (
    <div>
      <ul>
        {list.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addName}>Add Name</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Counter />
      <NameList />
    </>
  );
};

export default App;
