import { useParams } from "react-router-dom";
import { useFlowers } from "../../context/FlowersProvider";
import { useEffect } from "react";
import Button from "../../ui/Button";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersionNumber";
import ScrollProducts from "../../ui/ScrollProducts";

function Product() {
  const { id } = useParams();
  const { getFlower, currentFlower, flowers } = useFlowers();

  useEffect(() => {
    getFlower(id);
  }, [id]);

  const sililarFlowers = flowers.filter(
    (f) => f.categoryId == currentFlower.categoryId
  );

  if (!currentFlower) return <p>Loading...</p>;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 mt-8">
        {/* -----image-------------- */}
        <div className=" flex items-center">
          <img src={currentFlower.imgUrl} alt="" className="w-full h-60" />
        </div>
        {/* -------properties-------------- */}
        <div className=" w-full md:w-[25rem] mt-6 pb-4 border-b md:border-b-0 border-neutral-400">
          <p className="text-center md:text-start md:border-b-2 md:pb-2 border-neutral-400 mb-6 font-bold">
            {currentFlower.title}
          </p>
          <p className="hidden md:block pb-2">ویژگی ها</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {currentFlower.properties.map((p) => (
              <div
                key={p.id}
                className="badge badge--secondary flex flex-col p-2"
              >
                <span>{p.title}</span>
                <span>
                  {p.description.type === "Number"
                    ? toPersianNumbers(p.description)
                    : p.description}{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* ------add to cart--------- */}
        <div className="flex flex-col items-start w-full md:w-[14rem] mt-6 md:border border-neutral-400 rounded-md md:p-6">
          <div className="border-b border-neutral-400 pb-4 w-full flex flex-col gap-y-4">
            <p className="font-bold">فروشنده</p>
            <p className="font-medium text-sm">فلاور گاردن| عملکرد عالی</p>
            <p>{toPersianNumbers(4.6)}</p>
          </div>
          <p className="w-full flex items-center justify-between my-6 text-sm">
            <span>قیمت:</span>
            <span>{toPersianNumbersWithComma(currentFlower.price)}</span>
          </p>
          <div className="w-full flex items-center">
            <Button variant="secondary" className="w-full">
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
      {/* -----similar flowers-------- */}
      <ScrollProducts title="گیاهان مشابه" products={sililarFlowers} />
    </div>
  );
}

export default Product;
