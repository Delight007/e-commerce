import React from "react";
import { LiaGiftSolid } from "react-icons/lia";
import { LiaHandsSolid } from "react-icons/lia";
export default function Delivery() {
  return (
    <section>
      <article className="flex">
        <div className="border p-2 h-[40px]">
          <LiaGiftSolid className="ml-1 z-100 text-lg p-0" />
          <LiaHandsSolid className="text-2xl z-10 mb-2" />
        </div>
        <div></div>
      </article>
      <article></article>
    </section>
  );
}
