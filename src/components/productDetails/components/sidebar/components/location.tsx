// import { useShipping } from "@/src/context/shippingContext"; // use this instead

import { categoryData } from "@/src/components/location/locationLsit";
import { useShipping } from "@/src/components/shippingform/shippingContext";
import Delivery from "./delivery";

export default function Location() {
  const { shippingInfo, setShippingInfo } = useShipping();

  const handleStateChange = (state: string) => {
    const firstCity = categoryData[state]?.city[0] || "";
    setShippingInfo({
      ...shippingInfo,
      state,
      city: firstCity,
    });
  };

  const handleCityChange = (city: string) => {
    setShippingInfo({
      ...shippingInfo,
      city,
    });
  };

  return (
    <div>
      <h2 className="font-medium text-base">Choose your location</h2>
      <div className="py-2">
        <select
          value={shippingInfo.state}
          onChange={(e) => handleStateChange(e.target.value)}
          className="p-2 border-2 border-gray-500  shadow-md rounded-md w-full h-[48px] outline-none focus:border-red-500  cursor-pointer"
        >
          {Object.keys(categoryData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="py-2">
        <select
          className="p-2 border-2 border-gray-500 w-full h-[48px] shadow-md rounded-md outline-none focus:border-red-500 cursor-pointer"
          value={shippingInfo.city}
          onChange={(e) => handleCityChange(e.target.value)}
          disabled={!shippingInfo.state}
        >
          {shippingInfo.state &&
            categoryData[shippingInfo.state]?.city.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>

      <div>
        <Delivery />
      </div>
    </div>
  );
}
