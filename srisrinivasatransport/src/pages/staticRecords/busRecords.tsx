// /pages/bus-records.tsx
import Table from "@/components/Table";
import { staticBusData, Bus } from "@/data/staticBusData";

const columns: {
  header: string;
  accessor: keyof Bus;
  isLink?: boolean;
}[] = [
  { header: 'ID', accessor: 'id' },
  { header: 'Bus No', accessor: 'busNo' },
  { header: 'RC Link', accessor: 'rcLink', isLink: true },
  { header: 'Insurance Link', accessor: 'insuranceLink', isLink: true },
  { header: 'Tax Link', accessor: 'taxLink', isLink: true },
  { header: 'FC Link', accessor: 'fcLink', isLink: true },
];

export default function BusRecordsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bus Info Table</h1>
      <Table<Bus> columns={columns} data={staticBusData} />
    </div>
  );
}
