"use client";
import Categories from "@/src/components/CategoryList/categories";
import Deals from "@/src/components/Deals/Deal";
import MoreDetailst from "@/src/components/MoreDetails/moreDetailst";
import Navbar from "@/src/components/navbar/navbar";
import SwiperComponent from "@/src/components/Swipper/SwiperComponent";

export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0  z-50">
        {/* <div "> */}
        <Navbar />
        {/* </div> */}
      </header>
      <main>
        <section className="flex items-center flex-col pt-[100px] sm:pt-[120px] lg:pt-[150px] pb-3 border-b-0  mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex gap-4 w-full h-[392px] py-2 overflow-hidden flex-col lg:flex-row">
            {/* Left sidebar */}
            <div className=" flex-col rounded-md border bg-white w-[210px] h-full flex-shrink-0 hidden lg:flex">
              <Categories />
            </div>

            {/* Center */}
            <div className="relative rounded-md flex-1 h-full flex justify-center items-center min-w-0">
              <SwiperComponent />
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col w-auto lg:w-[210px] h-auto lg:h-full rounded-md gap-4 flex-shrink-0">
              <MoreDetailst />
            </div>
          </div>

          <div className="w-full  lg:h-auto bg-white  rounded-md my-2">
            <Deals />
          </div>
        </section>
      </main>
    </>
  );
}
