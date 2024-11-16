import { useMemo, useState } from 'react';
import List from './components/List';

// TODO: 콘솔창을 확인해보고 input 타이핑할 때 마다
//       List 컴포넌트가 불필요하게 리렌더링되지 않게 useMemo 사용해서 해결해 보세요.

const App = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addItem = () => {
    setItems((prevItems) => [...prevItems, input]);
    setInput('');
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.toLocaleLowerCase().includes('item'));
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <List items={filteredItems} />
    </div>
  );
};

export default App;
