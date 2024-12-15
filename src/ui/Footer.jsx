import { LiaTelegram } from "react-icons/lia";
import { ImLinkedin } from "react-icons/im";
import { PiInstagramLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-gray mt-12 py-4">
     <div className="container max-w-[1024px] flex flex-col md:flex-row-reverse gap-y-4 md:gap-x-16 text-xs md:text-sm text-neutral-500">
     <div className=" flex justify-between md:flex-1 mt-4 md:mt-0 ">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-neutral-600 font-bold">آپارتمانی</h2>
          <span className="">باباآدم</span>
          <span >یوکا</span>
          <span >سانسوریا</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-neutral-600 font-bold">تزیینی</h2>
          <span >یشم</span>
          <span >کراسولا</span>
          <span >کراسولا خرفه ای</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-neutral-600 font-bold">کادویی</h2>
          <span >آنتوریوم</span>
          <span > بونسای</span>
          <span >بنت قنسول</span>
        </div>
      </div>
      <div className=" md:flex-1">
        <div>
          <h1 className="text-primary-900 font-bold text-lg md:text-xl">گیاه لند</h1>
          <p>
            گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان
            باعث راحتی شما در خرید انواع گیاهان شود . تنوع گیاهان و همچنین ایجاد
            بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند می
            باشد
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between" >
          <div className="flex flex-col gap-y-4">
            <p>تلفن پشتیبانی: 0212441</p>
            <div className="flex items-center gap-x-4">
              <LiaTelegram className="w-5 h-5" />
              <ImLinkedin className="w-5 h-5" />
              <PiInstagramLogoThin className="w-5 h-5" />
            </div>
          </div>
          <img src="/images/image 8.png" alt="" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default Footer;
