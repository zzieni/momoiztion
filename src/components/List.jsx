import { memo } from 'react';

// TODO: input 타이핑할 때 리스트 컴포넌트가 불필요하게 렌더링되지 않게 해보세요.
// eslint-disable-next-line react/display-name
const List = memo(({ items }) => {
  console.log('List component rendered');
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default List;
