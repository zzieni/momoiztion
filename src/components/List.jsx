import { memo } from "react";

const List = ({ items }) => {
  console.log("List component rendered");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default memo(List);
