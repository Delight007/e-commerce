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
      <Link href="/appliances" className="w-full">
        <HoverPopoverAppliances />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverPhone />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverHealth />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverHome />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverElectronics />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverFashions />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverComputing />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverBaby />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverGaming />
      </Link>
      <Link href="#" className="w-full">
        <HoverPopoverOther />
      </Link>
    </div>
  );
}
