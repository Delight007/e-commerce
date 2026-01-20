"use client";
import { auth } from "@/src/config/firebase";
import { useUserShippingFromOrders } from "@/src/utils/useUserShippingForm";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountOverview = () => {
  const [user] = useAuthState(auth);

  const { shippingInfo, loading } = useUserShippingFromOrders(user ?? null);

  return (
    <section className="w-full bg-gray-50 px-4 py-6 md:px-6 rounded-md">
      <h1 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Account Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* ACCOUNT DETAILS */}
        <div className="bg-white border rounded-sm">
          <div className="border-b px-4 py-3 text-xs md:text-sm font-semibold">
            ACCOUNT DETAILS
          </div>
          <div className="px-4 py-4 text-sm md:text-base">
            <p className="font-medium capitalize">
              {user?.displayName?.split(" ")}
            </p>
            <p className="text-gray-500 break-all">{user?.email}</p>
          </div>
        </div>

        {/* ADDRESS BOOK */}
        <div className="bg-white border rounded-sm">
          <div className="border-b px-4 py-3 text-xs md:text-sm font-semibold flex justify-between items-center">
            ADDRESS BOOK
            <button className="text-orange-500 text-sm md:text-base">✏️</button>
          </div>
          <div className="px-4 py-4 text-sm md:text-base text-gray-700 space-y-1">
            <p className="font-medium mb-1">Your default shipping address:</p>

            {loading ? (
              <p className="text-gray-500 text-sm">Loading address...</p>
            ) : shippingInfo ? (
              <>
                <p className="capitalize">
                  {shippingInfo.firstName} {shippingInfo.lastName}
                </p>
                <p>{shippingInfo.address}</p>
                <p>
                  {shippingInfo.city}, {shippingInfo.state}
                </p>
                <p>{shippingInfo.phone}</p>
              </>
            ) : (
              <p className="text-gray-500 text-sm">No shipping address found</p>
            )}
          </div>
        </div>

        {/* JUMIA STORE CREDIT */}
        <div className="bg-white border rounded-sm">
          <div className="border-b px-4 py-3 text-xs md:text-sm font-semibold">
            JUMIA STORE CREDIT
          </div>
          <div className="px-4 py-4 flex items-center gap-2 text-sm md:text-base">
            <span className="text-blue-600 text-lg">💳</span>
            <p>
              Jumia store credit balance:
              <span className="font-semibold ml-1">₦ 0</span>
            </p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="bg-white border rounded-sm">
          <div className="border-b px-4 py-3 text-xs md:text-sm font-semibold">
            NEWSLETTER PREFERENCES
          </div>
          <div className="px-4 py-4 text-sm md:text-base text-gray-700">
            <p className="mb-3 leading-relaxed">
              Manage your email communications to stay updated with the latest
              news and offers.
            </p>
            <button className="text-orange-500 font-medium text-sm md:text-base">
              Edit Newsletter preferences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOverview;

// orders
// orders

// 2fJt1SOjVH2ykz9CX0mI

// 3vcSReOzXAuhyIMVeTMX

// 8Cg6thuzFBJvNC6f1W6e

// A5WFWm61BxtuocasoAjx

// UXDCRFKtLRrQ15D50nIa

// uwb9AQTsBHLe0LlDZMmR
// 3vcSReOzXAuhyIMVeTMX
// createdAt
// 15 June 2025 at 16:07:12 UTC+1
// (timestamp)

// (array)

// paymentRef
// "0d37b22a-cac1-4550-8e30-40e7952a3b8f"
// (string)

// shippingInfo
// (map)

// address
// "tsaragi"
// (string)

// city
// "Ikeja"
// (string)

// deliveryMethod
// "Pick Up"
// (string)

// email
// "ganalafiyalevi@gmail.com"
// (string)

// firstName
// "gana"
// (string)

// lastName
// "levi"
// (string)

// phone
// "09158883523"
// (string)

// state
// "Lagos"
// (string)

// status
// "Ready for Pickup"
// (string)

// total
// 844429
// (number)

// totalToPay
// 844429
// (number)

// userId
// "BV7FlIsCuCg8nACWLrbAOLLehRx1"
// (string)

// Database location: nam5
