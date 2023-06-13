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

  return data.map((eachRow) => {
    const isExpanded = expandedRows.includes(eachRow.id);

    let renderedRows = (
      <TableDataRow
        key={eachRow.id}
        row={eachRow}
        level={level}
        onClick={() => handleRowClick(eachRow.id)}
      />
    );

    // Render children of current item if expanded
    if (eachRow.children && eachRow.children.length > 0 && isExpanded) {
      renderedRows = (
        <>
          {renderedRows}
          <TableRenderRows
            data={eachRow.children}
            level={level + 1}
            expandedRows={expandedRows}
            setExpandedRows={setExpandedRows}
          />
        </>
      );
    }

    return renderedRows;
  });
};
