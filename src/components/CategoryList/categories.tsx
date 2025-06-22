"use client";

import HoverPopoverAppliances from "./AppliancesMenu/flyOutMenu";
import HoverPopoverBaby from "./BabyProductMenu/flyOutMenu";
import HoverPopoverComputing from "./ComputingMenu/flyOutMenu";
import HoverPopoverElectronics from "./ElectronicsMenu/flyOutMenu";
import HoverPopoverFashions from "./FashionMenu/flyOutMenu";
import HoverPopoverGaming from "./GamesMenu/flyOutMenu";
import HoverPopoverHealth from "./Healt&BeautyMenu/flyOutMenu";
import HoverPopoverHome from "./Home&OfficeMenu/flyOutMenu";
import HoverPopoverOther from "./OtherMenu/flyOutMenu";
import HoverPopoverPhone from "./Phone&TabletMenu/flyOutMenu";

export default function categories() {
  return (
    <div className="flex flex-col rounded-md  w-[210px] h-full">
      <div className="w-full">
        <HoverPopoverAppliances />
      </div>
      <div className="w-full">
        <HoverPopoverPhone />
      </div>
      <div className="w-full">
        <HoverPopoverHealth />
      </div>
      <div className="w-full">
        <HoverPopoverHome />
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
