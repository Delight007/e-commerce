import { Fugaz_One } from "next/font/google";
import { BsTruck } from "react-icons/bs";
import { FaCreditCard, FaGift } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function SidebarLoginSignup() {
  return (
    <div className="bg-gradient-to-b from-red-500 to-red-700 w-full h-[100vh] p-4 text-white flex flex-col justify-center">
      <div className="max-w-xs mx-auto">
        {/* Logo and Branding - Smaller */}
        <div className="mb-6 text-center">
          <h1 className={`text-2xl font-bold mb-1 ${fugazOne.className}`}>
            GanaExpress
          </h1>
          <p className="text-red-100 text-sm">Fastest Delivery</p>
        </div>

        {/* Benefits Section - SMALLER Boxes */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-center">
            Join GanaExpress
          </h2>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center text-center p-2 bg-white/10 rounded-md">
              <div className="bg-white/20 p-1.5 rounded-full mb-1">
                <BsTruck className="h-3 w-3" />
              </div>
              <h3 className="font-medium text-xs">Fast Delivery</h3>
              <p className="text-[10px] text-red-100">2-4 hours</p>
            </div>

            <div className="flex flex-col items-center text-center p-2 bg-white/10 rounded-md">
              <div className="bg-white/20 p-1.5 rounded-full mb-1">
                <FaGift className="h-3 w-3" />
              </div>
              <h3 className="font-medium text-xs">Member Offers</h3>
              <p className="text-[10px] text-red-100">Exclusive deals</p>
            </div>

            <div className="flex flex-col items-center text-center p-2 bg-white/10 rounded-md">
              <div className="bg-white/20 p-1.5 rounded-full mb-1">
                <FaCreditCard className="h-3 w-3" />
              </div>
              <h3 className="font-medium text-xs">Secure Payment</h3>
              <p className="text-[10px] text-red-100">100% safe</p>
            </div>

            <div className="flex flex-col items-center text-center p-2 bg-white/10 rounded-md">
              <div className="bg-white/20 p-1.5 rounded-full mb-1">
                <FaShield className="h-3 w-3" />
              </div>
              <h3 className="font-medium text-xs">Easy Returns</h3>
              <p className="text-[10px] text-red-100">30-day policy</p>
            </div>
          </div>
        </div>

        {/* Compact Testimonial - Smaller */}
        <div className="mb-4 p-2 bg-white/10 rounded-md">
          <p className="text-xs italic mb-1.5 leading-tight">
            "Best shopping experience! Fast delivery."
          </p>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
              <span className="text-xs font-bold">RP</span>
            </div>
            <div>
              <p className="text-xs font-medium">Rahul Patel</p>
              <p className="text-[10px] text-red-100">Verified Buyer</p>
            </div>
          </div>
        </div>

        {/* Trust Badges - Smaller */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-sm font-bold">50K+</div>
            <div className="text-[10px] text-red-100">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold">24/7</div>
            <div className="text-[10px] text-red-100">Support</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold">100%</div>
            <div className="text-[10px] text-red-100">Secure</div>
          </div>
        </div>

        {/* Special Offer Banner - Smaller */}
        <div className="p-2 bg-yellow-400 text-red-900 rounded-md text-center">
          <p className="font-bold text-xs">🎁 Get 20% off!</p>
        </div>
      </div>
    </div>
  );
}
