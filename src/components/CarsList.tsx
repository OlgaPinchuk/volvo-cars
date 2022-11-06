import { FC, useState, useMemo } from "react";

import { Filter } from "./Filter";
import { CarsCarousel } from "./CarsCarousel";
import { ICar } from "types/types";

type iProps = {
  items: ICar[];
};

export const CarsList: FC<iProps> = ({ items }: iProps) => {
  const defaultOption = "all";
  const [activeOption, setActiveOption] = useState(defaultOption);
  const filterOptions = [
    defaultOption,
    ...new Set(items.map((item) => item.bodyType)),
  ];

  const itemsToShow: ICar[] = useMemo(
    () =>
      activeOption === defaultOption
        ? items
        : items.filter((item) => item.bodyType === activeOption),
    [activeOption, items]
  );

  const onFilterChange = (option: string) => {
    setActiveOption(option);
  };

  return (
    <>
      <Filter
        options={filterOptions}
        active={activeOption}
        onChange={onFilterChange}
      />
      <CarsCarousel items={itemsToShow} />
    </>
  );
};
