import Sidebar1 from "./sidebar/sidebar1";
import Sidebar2 from "./sidebar/sidebar2";

export default function DetailsSidebar() {
  return (
    <div className="lg:w-[296px] w-full lg:h-[807px] h-auto mt-2 lg:mt-0 lg:p-0 gap-4 flex flex-col justify-center items-center">
      <Sidebar1 />
      <Sidebar2 />
    </div>
  );
}
