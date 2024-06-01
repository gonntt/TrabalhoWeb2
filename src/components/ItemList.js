import React from 'react';
import './ItemList.css';

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div key={index} className="item">
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
