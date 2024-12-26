import { useCard } from "../context/CardReducer";
import Button from "./Button"


function AddToCartBtn({currentFlower}) {
    const { createCardItem, CardFlowers } = useCard();
  const isInCard = CardFlowers.map((f) => f.id).includes(currentFlower.id);
  return (
    <div className="w-full flex items-center">
            {isInCard ? (
              <p className="badge badge--secondary w-full p-2 text-center">
                به سبدخرید اضافه شد
              </p>
            ) : (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => createCardItem(currentFlower)}
              >
                افزودن به سبد خرید
              </Button>
            )}
          </div>
  )
}

export default AddToCartBtn
