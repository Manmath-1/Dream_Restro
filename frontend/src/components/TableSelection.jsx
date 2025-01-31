import React from "react";
import '../App.css';

const TableSelection = ({ setTableNo }) => {
  const handleTableClick = (table) => {
    setTableNo(table);
  };

  return (
    <div className="table-selection">
      <h2>Select a Table</h2>
      <div className="table-grid">
        {[1, 2, 3, 4, 5, 6].map((table) => (
          <button
            key={table}
            className="table-button"
            onClick={() => handleTableClick(table)}
          >
            Table {table}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelection;
