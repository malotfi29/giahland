import { useEffect } from "react";
import { useFlowers } from "../../context/FlowersProvider";
import { SingleCardFlower } from "./Card";
import AddToCartBtn from "../../ui/AddToCartBtn";

function Search({ query }) {
  const { searchFlower, searchResult } = useFlowers();
  useEffect(() => {
    searchFlower(query);
  }, [query]);

 

  if (!searchResult) return <p>...</p>;

  return (
    <div className="flex flex-col gap-y-4 p-4">
      {searchResult.map((flower) => (
        <SingleCardFlower flower={flower} key={flower.id} className="hidden">
         <AddToCartBtn currentFlower={flower} />
        </SingleCardFlower>
      ))}
    </div>
  );
}

export default Search;
