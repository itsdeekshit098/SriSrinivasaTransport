import React from 'react';
import { useState } from 'react';

export default function ContactPage() {
  const [vehicle,setVehicle] =useState("");
  const [date,setDate] = useState("");
  const [mobile,setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with:", { vehicle, date, mobile });
    if(!vehicle || !date || !mobile) {
      alert("Please fill all fields");
      return;
    }
    try {
      const response = await fetch("https://formsubmit.co/ajax/lootwithcard@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Vehicle Type": vehicle,
          Date: date,
          "Mobile Number": mobile,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setVehicle("");
        setDate("");
        setMobile("");
      } else {
        alert("There was an error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-green-600 font-bold text-center">
          ✅ We will reach out to you in 10 minutes!
        </h2>
      </div>
    );
  }


  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 max-w-4xl mx-auto">
      {/* Intro Section */}
      <section className="mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Contact Sri Srinivasa Transport
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          At Sri Srinivasa Transport, we specialize in reliable and affordable vehicle transport services across India.
          Whether you need a bus for group travel, a truck for goods delivery, or a car for personal use, we ensure safety,
          punctuality, and professionalism every time.
        </p>
      </section>

      {/* Contact Form using FormSubmit */}
      <form
        className="bg-white border border-gray-200 shadow-md rounded-xl p-5 sm:p-6 md:p-8 space-y-6"
      >
        {/* Hidden inputs for FormSubmit options */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Request - Sri Srinivasa Transport" />

        {/* Vehicle Dropdown */}
        <div>
          <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            id="vehicle"
            name="Vehicle Type"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#42b0d5]"
          >
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Truck">Truck</option>
          </select>
        </div>

        {/* Date Field */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            name="Date"
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#42b0d5]"
          />
        </div>

        {/* Mobile Number Field */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="Mobile Number"
            pattern="[6-9]{1}[0-9]{9}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
            placeholder="Enter 10-digit mobile number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#42b0d5]"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full sm:w-auto bg-[#42b0d5] hover:bg-[#379fc4] text-white font-semibold px-6 py-2 rounded-md shadow transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
