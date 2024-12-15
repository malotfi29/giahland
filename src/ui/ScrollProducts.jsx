import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Product from "../ui/Product";

function ScrollProducts({products,title}) {

const sliderLeft=()=>{
  var slider=document.getElementById("slider")
  slider.scrollLeft=slider.scrollLeft-200
}

const sliderRight=()=>{
  var slider=document.getElementById("slider")
  slider.scrollLeft=slider.scrollLeft+200
}


  return (
    <div className="flex flex-col">
      <h1 className="text-base lg:text-xl font-bold text-primary-900">{title}</h1>
    <div className=" flex relative items-center p-4">
      <MdChevronRight onClick={sliderRight} size={40} className="opacity-50 cursor-pointer hover:opacity-100" />
      <div id="slider" className="w-full h-full flex gap-x-4 overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth">
        {
          products.map(product=> <Product key={product.id} product={product}/>)
        }
      </div>
      <MdChevronLeft onClick={sliderLeft} size={40} className="opacity-50 cursor-pointer hover:opacity-100" />
    </div>
    </div>
  );
}

export default ScrollProducts;
