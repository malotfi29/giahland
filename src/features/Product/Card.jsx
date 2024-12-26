import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersionNumber";
import Button from "../../ui/Button";
import { useCard } from "../../context/CardReducer";

function Card() {
  let user = {};
  const { CardFlowers } = useCard();
  let tempCardItem = 0;
  const totalPrice = CardFlowers.reduce((acc, curr) => {
    tempCardItem += curr.quantity;
    return acc + curr.quantity * curr.price;
  }, 0);
  user = JSON.parse(localStorage.getItem("user")) || {};

  if (Object.keys(user).length === 0)
    return (
      <h1 className="text-lg mt-10 font-bold">
        لطفا وارد حساب کاربری خود شوید
      </h1>
    );

  if (CardFlowers.length === 0)
    return <h1 className="text-lg mt-10 font-bold">سبدخرید خالی است</h1>;

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-x-10 lg:gap-x-20">
      <div className="flex flex-col gap-y-2 mt-4 flex-1">
        {CardFlowers.map((c) => (
          <SingleCardFlower flower={c} key={c.id} />
        ))}
      </div>
      {/* total card */}
      <div className="flex flex-col mt-4 gap-y-3 sm:border border-neutral-400 rounded-md sm:p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">تعداد گیاه:</span>
          <span>{toPersianNumbers(tempCardItem)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">مجموع سبدخرید:</span>
          <span>{toPersianNumbersWithComma(totalPrice)} تومان</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">ارسال توسط:</span>
          <span>گیاه لند</span>
        </div>
        <label className="p-2 badge badge--secondary w-full text-sm flex items-center gap-x-2 mt-4">
          کد تخفیف:
          <input
            className="bg-transparent flex-1 outline-none"
            type="text"
            placeholder="کد تخفیف را وارد کنید"
          />
        </label>
        <Button variant="secondary">سفارش و خرید</Button>
      </div>
    </div>
  );
}

export default Card;

export function SingleCardFlower({ flower,className,children }) {
  const { plusQuantity, deleteCardItem } = useCard();
  const handlePlusQuantity = () => {
    plusQuantity(flower);
  };
  return (
    <div className="flex flex-col border border-neutral-400 rounded-md p-2">
      <div className="flex items-end gap-x-4 ">
        <div>
          <img
            className="w-48 h-48 bg-red-200"
            src={flower.imgUrl}
            alt={flower.title}
          />
        </div>
       <div className=" h-full flex flex-col ">
       <div className="flex flex-col gap-y-2 mb-4">
          <p className="font-bold text-sm sm:text-base">{flower.title}</p>
          <p className="text-xs md:text-sm">فلاورگاردن</p>
          <p className="text-xs sm:text-sm">قیمت: {flower.price} تومان</p>
        </div>
        {children}
       </div>
      </div>
      <div className={`${className} border border-neutral-400 flex items-center justify-between px-2 rounded-md text-xs w-1/3 mr-6 mt-4`}>
        <FaPlus
          className="text-primary-900 cursor-pointer"
          onClick={handlePlusQuantity}
        />
        <p className="flex flex-col items-center">
          <span>{flower.quantity}</span>
          <span>تعداد</span>
        </p>
        <FaMinus
          className="text-red-600 cursor-pointer"
          onClick={() => deleteCardItem(flower.id)}
        />
      </div>
    </div>
  );
}
