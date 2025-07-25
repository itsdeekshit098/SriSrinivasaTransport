import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link href="/documents" style={{ marginRight: '1rem' }}>Documents</Link>
    </nav>
  );
}
