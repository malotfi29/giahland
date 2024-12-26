import React from 'react'
import Button from '../../ui/Button'
import { IoIosArrowRoundBack } from 'react-icons/io'
import VerticalBadge from '../../ui/VerticalBadge'
import ScrollProducts from '../../ui/ScrollProducts'
import HorizontalBadge from '../../ui/HorizontalBadge'
import { toPersianNumbers } from '../../utils/toPersionNumber'
import { useFlowers } from '../../context/FlowersProvider'

function Products() {
    const {flowers } = useFlowers();
  return (
    <div>
      <div className="flex md:flex-row-reverse  flex-col items-center md:items-start justify-between">
          <img
            className="w-[10rem] h-[10rem] rounded-full md:w-[20rem] md:h-[20rem] lg:rounded-none lg:w-[25.7rem] lg:h-[25.5rem] my-5"
            src="/images/Vector 1.png"
            alt="flower"
          />
          <div className="flex flex-col items-center md:items-start max-w-[500px] ">
            <h1 className="text-lg font-bold md:text-2xl mb-4 mt-4 md:mt-10">
              خرید راحت گیاه،با{" "}
              <span className="text-primary-900">گیاه لند</span>
            </h1>
            <p className="text-sm md:text-base">
              با گیاه لند ،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
              استفاده کن. علاوه بر این ها می تونی به صورت رایگان از گیاه پزشک
              سایت مشاوره بگیری
            </p>
            <div className="flex gap-x-4 mt-5 items-center justify-center w-full">
              <Button variant="secondary">گیاهان تخفیف دار</Button>
              <Button variant="outline">
                <div className="flex">
                  <span className="text-xs">مشاوره با گیاه پزشک</span>
                  <IoIosArrowRoundBack />
                </div>
              </Button>
            </div>
            
            <div className="flex w-full mt-5 items-center justify-between text-sm md:text-base">
              <div className="flex flex-col items-center">
                <span>{toPersianNumbers(943)}+</span>
                <span>گیاه خانگی</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{toPersianNumbers(234)}+</span>
                <span>گیاه تزیینی</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{toPersianNumbers(128)}+</span>
                <span>گیاه کادویی</span>
              </div>
            </div>
          </div>
        </div>
        <VerticalBadge />
        <div className="flex flex-col md:flex-row items-center gap-4 my-8">
          <img
            className="h-[200px] flex-1 md:w-1/2"
            src="/images/Frame 142.png"
            alt="flower-shop"
          />
          <img
            className="h-[200px] flex-1 md:w-1/2"
            src="/images/Frame 144.png"
            alt="flower-shop"
          />
        </div>

        <ScrollProducts products={flowers} title="گیاهان آپارتمانی" />
        <div>
          <h2 className="mt-4  text-base lg:text-xl font-bold text-primary-900">
            خدمات گیاه پزشکی
          </h2>
          <HorizontalBadge />
        </div>
    </div>
  )
}

export default Products
