import SquareCard from "@/components/SquareCard";
import Link from "next/link";

export default function DocumentsPage() {
return (
  <>
    <h1>Documents Page</h1>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    <Link href="/staticRecords/busRecords"><SquareCard imageUrl="/bus.png" label="Bus" /></Link>
    <Link href="/staticRecords/truckRecords"><SquareCard imageUrl="/truck.png" label="Truck" /></Link>
    <Link href="/staticRecords/carRecords"><SquareCard imageUrl="/car.png" label="Car"></SquareCard></Link>
    </div>
  </>
)
}
