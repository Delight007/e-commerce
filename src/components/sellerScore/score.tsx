import React from "react";
import Score1 from "./score1/score1";
import Score2 from "./score2/score2";
import Score3 from "./score3/score3";
import Score4 from "./score4/score4";

export default function SellerScore() {
  return (
    <div>
      <h2 className="uppercase font-semibold text-[13px] ">seller score</h2>
      <Score1 />
      <Score2 />
      <Score3 />
      <Score4 />
    </div>
  );
}
