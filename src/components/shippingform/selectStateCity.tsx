import React from "react";
import statesWithCities from "./locationList/location";

type LocationSelectProps = {
  state: string;
  city: string;
  errors?: { state?: string; city?: string };
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
};

const LocationSelect: React.FC<LocationSelectProps> = ({
  state,
  city,
  errors,
  onStateChange,
  onCityChange,
}) => {
  return (
    <div className="flex gap-2 mt-4">
      <div className="flex flex-col flex-1">
        <label className="font-semibold text-gray-500">State</label>
        <select
          value={state}
          onChange={(e) => onStateChange(e.target.value)}
          className="border p-2 rounded-md focus:outline-red-500"
        >
          {Object.keys(statesWithCities).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors?.state && (
          <div className="text-[12px] text-red-500">{errors.state}</div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <label className="font-semibold text-gray-500">City</label>
        <select
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="border p-2 rounded-md focus:outline-red-500"
        >
          {(statesWithCities[state] || []).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors?.city && (
          <div className="text-[12px] text-red-500">{errors.city}</div>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;
