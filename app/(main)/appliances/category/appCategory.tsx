"use client";
import AirService from "./Air/air";
import Binatone from "./binatone/binatone";
import Brand from "./brand/brand";
import Category from "./categories/categories";
import Century from "./century/century";
import CookingDeals from "./cookingDeals/cookingDeals";
import CoolingHeatingDeals from "./cooling-heatingDeals/coolingHeatingDeals";
// import Glamstar from "./glamstar/glamstar";
// import Hisense from "./hisense/hisense";
import HomeDeals from "./homeDeals/homeDeals";
import KitchenAppliances from "./KitchenApp/kitchenAppliances";
import SilverCrest from "./silverCrest/silverCrest";
import Skyrun from "./skyrun/skyrun";
import Syinix from "./syinix/syinix";
import Thermocool from "./thermocool/thermocool";

export default function AppCategory() {
  return (
    <div>
      <div className="my-5">
        <Category />
      </div>
      <div className="my-5">
        <HomeDeals />
      </div>
      <div className="my-6">
        <Brand />
      </div>
      <div className="my-5">
        <CookingDeals />
      </div>
      <div className="my-5">
        <KitchenAppliances />
      </div>
      <div className="my-5">
        <AirService />
      </div>
      <div className="my-5">
        <CoolingHeatingDeals />
      </div>

      {/* <div className="my-5">
        <SilverCrest />
      </div>
      <div className="my-5">
        <Glamstar />
      </div>
      <div className="my-5">
        <Century />
      </div> */}
      <div className="my-5">
        <Binatone />
      </div>
      <div className="my-5">
        <Skyrun />
      </div>
      {/* <div className="my-5">
        <Hisense />
      </div>
      <div className="my-5">
        <Thermocool />
      </div>
      <div className="my-5">
        <Syinix />
      </div> */}
    </div>
  );
}
