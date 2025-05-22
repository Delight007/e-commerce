"use client";

import Link from "next/link";

import HoverPopoverPhone from "./Phone&TabletMenu/flyOutMenu";
import HoverPopoverHealth from "./Healt&BeautyMenu/flyOutMenu";
import HoverPopoverHome from "./Home&OfficeMenu/flyOutMenu";
import HoverPopoverElectronics from "./ElectronicsMenu/flyOutMenu";
import HoverPopoverFashions from "./FashionMenu/flyOutMenu";
import HoverPopoverComputing from "./ComputingMenu/flyOutMenu";
import HoverPopoverBaby from "./BabyProductMenu/flyOutMenu";
import HoverPopoverGaming from "./GamesMenu/flyOutMenu";
import HoverPopoverOther from "./OtherMenu/flyOutMenu";
import HoverPopoverAppliances from "./AppliancesMenu/flyOutMenu";

export default function categories() {
  return (
    <div className="flex flex-col rounded-md  w-[210px] h-full">
      <div className="w-full">
        {/* <Link href="/appliances" className="w-full"> */}
        <HoverPopoverAppliances />
        {/* </Link> */}
      </div>
      <div className="w-full">
        {/* <Link href="#"> */}
        <HoverPopoverPhone />
        {/* </Link> */}
      </div>
      <div className="w-full">
        {/* <Link href="#"> */}
        <HoverPopoverHealth />
        {/* </Link> */}
      </div>
      <div className="w-full">
        {/* <Link href="#"> */}
        <HoverPopoverHome />
        {/* </Link> */}
      </div>
      <div className="w-full">
        <HoverPopoverElectronics />
      </div>
      <div className="w-full">
        <HoverPopoverFashions />
      </div>
      <div className="w-full">
        <HoverPopoverComputing />
      </div>
      <div className="w-full">
        <HoverPopoverBaby />
      </div>
      <div className="w-full">
        <HoverPopoverGaming />
      </div>
      <div className="w-full">
        <HoverPopoverOther />
      </div>
    </div>
  );
}
