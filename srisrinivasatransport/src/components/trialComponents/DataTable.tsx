import React, { useState } from 'react';

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  sticky?: boolean;
  width?: string;
  render?: (row: T) => React.ReactNode; // ✅ Add this
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  stickyHeader?: boolean;
}

export function DataTable<T>({ data, columns, stickyHeader = false }: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      return sortConfig.direction === 'asc'
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });
  }, [data, sortConfig]);

  const onSort = (key: keyof T) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'sans-serif' }}>
        <thead style={stickyHeader ? { position: 'sticky', top: 0, background: '#fff', zIndex: 1 } : {}}>
          <tr>
            {columns.map((col, index) => (
              <th
                key={String(col.key)}
                onClick={() => col.sortable && onSort(col.key)}
                style={{
                  padding: '12px',
                  backgroundColor: '#f9f9f9',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                  cursor: col.sortable ? 'pointer' : 'default',
                  position: col.sticky ? 'sticky' : 'static',
                  left: col.sticky ? `${index * 150}px` : undefined,
                  background: col.sticky ? '#fff' : undefined,
                  width: col.width || 'auto'
                }}>
                {col.label}
                {col.sortable && (
                  <span style={{ marginLeft: 5 }}>
                    {sortConfig?.key === col.key
                      ? sortConfig.direction === 'asc' ? '↑' : '↓'
                      : '⇅'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f1f1f1'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = ''}>
              {columns.map((col, index) => (
                <td
                  key={String(col.key)}
                  style={{
                    padding: '12px',
                    textAlign: 'left',
                    position: col.sticky ? 'sticky' : 'static',
                    left: col.sticky ? `${index * 150}px` : undefined,
                    background: col.sticky ? '#fff' : undefined,
                    width: col.width || 'auto'
                  }}>
                  {row[col.key] as string | number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;