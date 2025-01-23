import food1 from "../assets/food1.svg";
import food2 from "../assets/food2.svg";
import food3 from "../assets/food3.svg";

export type cardDataProps = {
  id: number;
  foodName: string;
  foodImage: string;
};

export const cardData: cardDataProps[] = [
  { id: 1, foodName: "Pasta, Green Sauce & Kpomo", foodImage: food1 },
  { id: 2, foodName: "Egg-cooked Fried Rice & Peas", foodImage: food2 },
  {
    id: 3,
    foodName: "Shredded Roasted Chicken",
    foodImage: food3,
  },
  {
    id: 4,
    foodName: "Naija Special Fried Rice with Shrimps",
    foodImage: food1,
  },
  {
    id: 5,
    foodName: "Souse Fries & Bacon",
    foodImage: food2,
  },
];
