import React from 'react';
import { DataTable, Column } from '../../components/trialComponents/DataTable'; // adjust the path based on your project structure

interface Person {
  id: number;
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [
  { id: 1, name: 'Alice', age: 25, city: 'Mumbai' },
  { id: 2, name: 'Bob', age: 30, city: 'Delhi' },
  { id: 3, name: 'Charlie', age: 28, city: 'Bangalore' },
  { id: 4, name: 'David', age: 22, city: 'Chennai' }
];

const columns: Column<Person>[] = [
  { key: 'id', label: 'ID', sortable: true, sticky: true, width: '80px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'city', label: 'City' }
];

export default function ExampleUsage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Table</h2>
      <DataTable data={data} columns={columns} stickyHeader />
    </div>
  );
}
