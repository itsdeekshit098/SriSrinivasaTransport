import Table from "@/components/Table";

type Bus = {
  id: number;
  busNo: string;
  rcLink: string;
  insuranceLink: string;
  taxLink: string;
  fcLink: string;
};

const data: Bus[] = [
  {
    id: 1,
    busNo: 'KA-01-AB-1234',
    rcLink: 'https://example.com/rc1.pdf',
    insuranceLink: 'https://example.com/insurance1.pdf',
    taxLink: 'https://example.com/tax1.pdf',
    fcLink: 'https://example.com/fc1.pdf',
  },
  {
    id: 2,
    busNo: 'KA-02-CD-5678',
    rcLink: 'https://example.com/rc2.pdf',
    insuranceLink: 'https://example.com/insurance2.pdf',
    taxLink: 'https://example.com/tax2.pdf',
    fcLink: 'https://example.com/fc2.pdf',
  },
];

// ✅ Fix: add generic here to infer keyof Bus
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

export default function busRecords() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bus Info Table</h1>
      <Table<Bus> columns={columns} data={data} />
    </div>
  );
}
