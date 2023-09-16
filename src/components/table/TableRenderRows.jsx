import React from 'react';
import { TableDataRow } from './TableDataRow';

export const TableRenderRows = ({ data, level }) => {
  const [expandedRows, setExpandedRows] = React.useState([]);

  // Handle row click
  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(id)) {
        return prevExpandedRows.filter((rowId) => rowId !== id);
      }
      return [...prevExpandedRows, id];
    });
  };

  // Expand row
  const handleExpandRow = (rowId) => {
    setExpandedRows([...expandedRows, rowId]);
  };

  // Collapse row
  const handleCollapseRow = (rowId) => {
    setExpandedRows(expandedRows.filter((id) => id !== rowId));
  };

  // Render each row
  return data.map((eachRow, index) => {
    const isExpanded = expandedRows.includes(eachRow.id);

    let renderedRows = (
      <TableDataRow
        key={eachRow.id}
        index={index}
        lengthOfArray={data.length}
        row={eachRow}
        level={level}
        isExpanded={isExpanded}
        onClick={() => handleExpandRow(eachRow.id)}
      />
    );

    // Render children of current item if expanded
    if (eachRow.children && eachRow.children.length > 0 && isExpanded) {
      renderedRows = (
        <React.Fragment key={eachRow.id}>
          {renderedRows}
          <TableRenderRows
            data={eachRow.children}
            level={level + 1}
            expandedRows={expandedRows}
            isExpanded={isExpanded}
            setExpandedRows={setExpandedRows}
          />
        </React.Fragment>
      );
    }

    return renderedRows;
  });
};
