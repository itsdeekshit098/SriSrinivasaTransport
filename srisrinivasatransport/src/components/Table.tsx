import React from "react";

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
    <div className="w-full overflow-x-auto">
      <table className="min-w-[600px] w-full border-collapse mt-5">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                className="px-4 py-3 border border-gray-300 whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col) => {
                const value = row[col.accessor];
                return (
                  <td
                    key={String(col.accessor)}
                    className="px-4 py-3 border border-gray-300 whitespace-nowrap"
                  >
                    {col.isLink && typeof value === "string" ? (
                      <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
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
    </div>
  );
}
