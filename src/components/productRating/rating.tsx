// "use clients";
import Rating2 from "./rating2/rating";
import Rating1 from "./rating1/rating";
import Rating3 from "./rating3/rating";
import Rating4 from "./rating4/rating";

export default function Rating() {
  return (
    <div>
      <h2 className="uppercase font-semibold text-[13px] ">product rating</h2>
      <Rating4 />
      <Rating3 />
      <Rating2 />
      <Rating1 />
    </div>
  );
}
