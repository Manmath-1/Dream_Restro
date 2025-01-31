import React from "react";
import "../App.css";

const Bill = ({ order, bill, clearTable, updateOrder }) => {
  const increaseQuantity = (index) => {
    const updatedOrder = [...order];
    updatedOrder[index].quantity += 1;
    updateOrder(updatedOrder);
  };

  const decreaseQuantity = (index) => {
    const updatedOrder = [...order];
    if (updatedOrder[index].quantity > 1) {
      updatedOrder[index].quantity -= 1;
      updateOrder(updatedOrder);
    }
  };

  const removeItem = (index) => {
    const updatedOrder = order.filter((_, i) => i !== index);
    updateOrder(updatedOrder);
  };

  return (
    <div className="bill">
      <h3>Order Summary</h3>
      <ul>
        {order.map((item, index) => (
          <li key={index} className="bill-item">
            <div className="item-info">
              {item.item} - ₹{item.price} x {item.quantity}
            </div>

          </li>
        ))}
      </ul>
      <h4>Total: ₹{bill}</h4>
      <button onClick={clearTable} className="clear-button">
        Submit & Clear Table
      </button>
    </div>
  );
};

export default Bill;
