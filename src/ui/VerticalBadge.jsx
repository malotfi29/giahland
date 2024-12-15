const badges = [
  {
    id: 1,
    src: "images/b3.png",
    title: "تحویل درب منزل",
    description:
      "با ایجاد آدرس در پروفایل کاربری محصول را درب منزل تحویل بگیرید",
  },
  {
    id: 2,
    src: "images/b2.png",
    title: "ضمانت محصول",
    description:
      "به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل می توانید مرجوع کنید",
  },
  {
    id: 3,
    src: "images/b1.png",
    title: "پرداخت درب منزل",
    description:
      "برای اطمینان خاطر مشتریان علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد",
  },
];

function VerticalBadge() {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-4 p-4 ">
      {badges.map((badge) => (
        <div key={badge.id} className="flex flex-col items-center">
          <img className="w-20 h-20" src={badge.src} alt={badge.title} />
          <span className="text-base md:text-lg font-bold">{badge.title}</span>
          <span className="text-center text-xs md:text-sm">{badge.description}</span>
        </div>
      ))}
    </div>
  );
}

export default VerticalBadge;
