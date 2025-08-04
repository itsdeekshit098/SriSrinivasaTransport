import Link from "next/link";
import { Card, CardContent } from "@/components/card";

export default function HomePage() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Our Needs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Need Bus */}
        <Link href="/needs/bus">
          <Card className="shadow-md border border-blue-100 hover:shadow-lg transition">
            <CardContent className="p-5 text-center">
              <img
                src="/need-bus.png"
                alt="Need Bus"
                className="w-full h-32 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-lg font-semibold text-blue-800">Need Bus</h2>
            </CardContent>
          </Card>
        </Link>

        {/* Need Car */}
        <Link href="/needs/car">
          <Card className="shadow-md border border-blue-100 hover:shadow-lg transition">
            <CardContent className="p-5 text-center">
              <img
                src="/need-car.png"
                alt="Need Car"
                className="w-full h-32 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-lg font-semibold text-blue-800">Need Car</h2>
            </CardContent>
          </Card>
        </Link>

        {/* Need Truck */}
        <Link href="/needs/truck">
          <Card className="shadow-md border border-blue-100 hover:shadow-lg transition">
            <CardContent className="p-5 text-center">
              <img
                src="/need-truck.png"
                alt="Need Truck"
                className="w-full h-32 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-lg font-semibold text-blue-800">Need Truck</h2>
            </CardContent>
          </Card>
        </Link>

        <Link href="/needs/driver">
          <Card className="shadow-md border border-blue-100 hover:shadow-lg transition">
            <CardContent className="p-5 text-center">
              <img
                src="/need-driver.png"
                alt="Need Driver"
                className="w-full h-32 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-lg font-semibold text-blue-800">Need Driver</h2>
            </CardContent>
          </Card>
        </Link>

        {/* Need Driver Job */}
        <Link href="/needs/driver-job">
          <Card className="shadow-md border border-blue-100 hover:shadow-lg transition">
            <CardContent className="p-5 text-center">
              <img
                src="/need-driverJob.png"
                alt="Need Driver Job"
                className="w-full h-32 object-contain rounded-md mb-4 bg-white"
              />
              <h2 className="text-lg font-semibold text-blue-800">Need Driver Job</h2>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
