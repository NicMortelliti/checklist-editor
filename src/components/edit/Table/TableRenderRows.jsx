import React from 'react';
import { TableDataRow } from './TableDataRow';

export const TableRenderRows = ({
  data,
  level,
  expandedRows,
  setExpandedRows,
}) => {
  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(id)) {
        return prevExpandedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevExpandedRows, id];
      }
    });
  };

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
        onClick={() => handleRowClick(eachRow.id)}
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
