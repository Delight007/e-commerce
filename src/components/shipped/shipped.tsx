import Abroad from "./Abroad/Abroad";
import Nigeria from "./Nigeria/Nigeria";

export default function Shipped() {
  return (
    <div>
      <div className=" py-2">
        <h2 className="uppercase font-semibold text-[13px] ">Shipped From</h2>
      </div>
      <div>
        <Abroad />
      </div>
      <div>
        <Nigeria />
      </div>
    </div>
  );
}
