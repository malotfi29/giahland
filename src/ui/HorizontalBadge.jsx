const badges = [
    {
      id: 4,
      src: "images/b4.png",
      title: "چک کردن اسید خاک",
      description:
        "با استفاده از ابزار مخصوص اسید خاک گیاه چک می شود",
    },
    {
      id: 5,
      src: "images/b5.png",
      title: "بررسی مواد معدنی خاک",
      description:
        "یکی از مواد مهم خاک ،مقدار مواد معدنی آن است که با دقت بررسی می شود",
    },
    {
      id: 6,
      src: "images/b6.png",
      title: "مشاهده بهترین دما",
      description:
        "از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود",
    },
    {
        id:7,
        src:"images/b7.png",
        title:"بررسی آسیب های احتمالی",
        description:"تمامی آسیب های احتمالی بررسی می گردد تا از وقوع مشکلات آینده جلوگیری شود",
    },
    {
        id:8,
        src:"images/b8.png",
        title:"بررسی ظاهر",
        description:"ظاهر گیاه بیانگر مسایل مهمی است .می توان با مشاهده ظاهر گیاه آفات و ... را متوجه شد",
    },
    {
        id:9,
        src:"images/b9.png",
        title:"از بین بردن عناصر آلوده خاک",
        description:"با استفاده از روش های نوین عناصر آلوده از خاک گیاه شما جمع آوری می شود",
    },
    {
        id:10,
        src:"images/b10.png",
        title:"اندازه گیری EC",
        description:"این اندازه گیری نشانی از مقدار کل مواد مغذی موجود در گیاهان میباشد",
    },
    {
        id:11,
        src:"images/b11.png",
        title:"ارایه مکمل",
        description:"برای رشد بهتر گیاهان و رفع آفات از مکمل ها می توان استفاده کرد",
    },
   
  ];

function HorizontalBadge() {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 items-center  gap-4">
          {badges.map((badge) => (
            <div key={badge.id} className="flex items-center gap-x-2  xl:h-[10rem]">
              <img className="w-15 h-15 lg:w-20 lg:h-20" src={badge.src} alt={badge.title} />
              <div className="flex flex-col justify-center gap-y-2">
              <span className="text-sm font-bold">{badge.title}</span>
              <span className="text-xs ">{badge.description}</span>
              </div>
            </div>
          ))}
        </div>
      );
}

export default HorizontalBadge
