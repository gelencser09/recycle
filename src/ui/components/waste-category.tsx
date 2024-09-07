import { Chip } from "@nextui-org/chip";
import Image from "next/image";

import plast from "../icons/plast.png";
import metal from "../icons/metal.png";
import beverageCartons from "../icons/kartoner.png";
import paper from "../icons/papir.png";
import cardboard from "../icons/pap.png";
import food from "../icons/food.png";
import glass from "../icons/glas.png";
import residual from "../icons/restaffald.png";

type CategoryName =
  | "RESIDUAL"
  | "METAL"
  | "BEVERAGE_CARTONS"
  | "PLASTIC"
  | "PAPER"
  | "CARDBOARD"
  | "FOOD"
  | "GLASS";

export default function WasteCategory({
  category,
}: {
  category: { name: string; parts: string[] };
}) {
  return (
    <div className="flex items-center gap-4">
      <WasteIcon category={category.name as CategoryName} />
      <div className="flex flex-wrap gap-1">
        {category.parts.map((part) => (
          <Chip key={part}>{part}</Chip>
        ))}
      </div>
    </div>
  );
}

function WasteIcon({ category }: { category: CategoryName }) {
  let icon = plast;

  switch (category) {
    case "METAL":
      icon = metal;
      break;
    case "BEVERAGE_CARTONS":
      icon = beverageCartons;
      break;
    case "PLASTIC":
      icon = plast;
      break;
    case "PAPER":
      icon = paper;
      break;
    case "CARDBOARD":
      icon = cardboard;
      break;
    case "FOOD":
      icon = food;
      break;
    case "GLASS":
      icon = glass;
      break;
    default:
      icon = residual;
      break;
  }

  return <Image src={icon} alt={category} className="rounded-md h-10 w-10" />;
}
