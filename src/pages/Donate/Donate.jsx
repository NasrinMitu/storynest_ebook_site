import React from "react";
// import visaIcon from "../../assets/visa.png"; // example card icons
// import masterCardIcon from "../../assets/mastercard.png";
import { FaCreditCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Donate() {
  return (
    <section className="bg-[#FFF8F0] min-h-screen py-20 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-[#3D2C2E] mb-8 text-center">
        Make a Donation
      </h2>
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-5xl border border-[#FFD166]/50 mx-auto">
        <div className="flex mb-10">
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2 border border-[#FFD166]/60 text-[#3D2C2E] rounded-xl hover:bg-[#FFD166]/20 transition-colors duration-200"
          >
            <FaCreditCard size={20} />
            <span>Credit / Debit Card</span>
          </button>
        </div>
        <form className="space-y-6">
          {/* Row 1: Frequency, Amount, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Donation Frequency
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="frequency"
                    className="text-[#FF6B6B]"
                  />
                  <span>Monthly</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="frequency"
                    className="text-[#FF6B6B]"
                  />
                  <span>One-time</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Donation Amount (USD)
              </label>
              <input
                type="number"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder="e.g. 50"
              />
            </div>

            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Row 2: First, Last, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder=""
              />
            </div>
          </div>

          {/* Row 3: Card Number */}
          <div>
            <label className="block text-[#3D2C2E] font-medium mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder="1234 5678 9012 3456"
              />
              <div className="absolute right-3 top-2 flex space-x-2">
                {/* <img src={visaIcon} alt="Visa" className="h-6" />
                <img src={masterCardIcon} alt="MasterCard" className="h-6" /> */}
              </div>
            </div>
          </div>

          {/* Row 4: Expiry + CVV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder="MM/YY"
              />
            </div>

            <div>
              <label className="block text-[#3D2C2E] font-medium mb-2">
                CVV / CVC
              </label>
              <input
                type="text"
                className="w-full border border-[#9CA3AF] rounded-md p-4 hover:border-[#FFD166] transition-colors duration-200 outline-none"
                placeholder="123"
              />
            </div>
          </div>

          {/* Donate Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-secondary-accent text-white py-3 rounded-md font-semibold hover:bg-support-green transition-colors mt-4"
            >
              Donate Now
            </button>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaLock size={16} className="text-[#06D6A0]" />
              <p className="text-[#3D2C2E] font-medium text-center">
                Transactions are secured and encrypted
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="max-w-5xl w-full mx-auto mt-16 text-[#3D2C2E] text-lg space-y-6 ">
        <h2 className="text-3xl font-bold text-[#3D2C2E] mb-8 text-center">About Donations</h2>
        <p className="leading-[1.8]">
          At StoryNest, we believe that reading can change lives.
          Every story, every page has the power to inspire, educate, and open
          new worlds. Your donations help us keep this vision alive. They allow
          us to create and share more eBooks, translate them into new languages,
          and make them accessible to readers everywhere. 
          <br /> You can choose to give
          once or support us monthly — either way, your contribution helps bring
          stories to more people. Every donation, big or small, makes a
          difference. If you’d like to know more about our projects or how your
          support is used, we’d love to hear from you. Together, we can make
          reading a joy that’s available to everyone, everywhere.
        </p>
      </div>
    </section>
  );
}

export default Donate;
