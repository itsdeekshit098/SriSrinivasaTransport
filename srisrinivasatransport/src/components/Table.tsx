import React from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T;
  isLink?: boolean;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.accessor)} style={styles.th}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              const value = row[col.accessor];
              return (
                <td key={String(col.accessor)} style={styles.td}>
                  {col.isLink && typeof value === 'string' ? (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  ) : (
                    String(value)
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f0f0f0',
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
  },
  td: {
    padding: '12px',
    border: '1px solid #ccc',
  },
};
