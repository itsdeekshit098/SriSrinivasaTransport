import Link from "next/link";
import { Card,CardContent } from "@/components/card";
import Image from "next/image";

export default function DocumentsPage() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-2 m-4">
        <Link href="/staticRecords/busRecords">
          <Card className="shadow-md border border-blue-100">
            <CardContent className="p-5">
              <img
                src="/bus.png"
                alt="Bus Records"
                className="w-full h-40 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-1 text-center">Bus Records</h2>
            </CardContent>
          </Card>
        </Link>
        <Link href="/staticRecords/busRecords">
          <Card className="shadow-md border border-blue-100">
            <CardContent className="p-5">
              <img
                src="/truck.png"
                alt="Bus Records"
                className="w-full h-40 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-1 text-center">Truck Records</h2>
            </CardContent>
          </Card>
        </Link>
        <Link href="/staticRecords/busRecords">
          <Card className="shadow-md border border-blue-100">
            <CardContent className="p-5">
              <img
                src="/car.png"
                alt="Bus Records"
                className="w-full h-40 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-xl font-semibold text-blue-800 mb-1 text-center">Car Records</h2>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  )
}
