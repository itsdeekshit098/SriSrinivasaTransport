import SquareCard from "@/components/SquareCard";
import Link from "next/link";

export default function DocumentsPage() {
return (
  <>
    <h1>Documents Page</h1>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    <Link href="/records/busRecords"><SquareCard imageUrl="/bus.png" label="Bus" /></Link>
    <Link href="/records/truckRecords"><SquareCard imageUrl="/truck.png" label="Truck" /></Link>
      
      
    </div>
  </>
)

  
}
