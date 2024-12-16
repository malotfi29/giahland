import { Link } from "react-router-dom"
import { toPersianNumbersWithComma } from "../utils/toPersionNumber"
import Button from "./Button"


function Product({product}) {
  return (
    <div className="flex flex-col items-center border outline-none overflow-hidden border-gray rounded-xl p-4 gap-y-4 min-w-[150px] md:min-w-[250px] ease-in-out duration-300">
      <img src={product.imgUrl} alt={product.title} className="w-full h-40" />
      <p className="text-start w-full text-sm md:text-base">{product.title}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm md:text-base">قیمت:</span>
        <span className="text-sm md:text-base">{toPersianNumbersWithComma(product.price)} تومان</span>
      </div>
      <Link to={`${product.id}`} className="flex items-center justify-center">
      <Button variant="secondary" className="w-full text-sm md:text-base" >مشاهده بیشتر</Button>
      </Link>
      
      
    </div>
  )
}

export default Product
