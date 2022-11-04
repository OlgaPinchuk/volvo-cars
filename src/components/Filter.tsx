import { FC } from "react";
import { TabNav, TabNavItem } from "vcc-ui";

type iProps = {
  options: string[];
  active: string;
  onChange: (option: string) => void;
};

export const Filter: FC<iProps> = ({ options, active, onChange }: iProps) => {
  const TabItems = options.map((option) => (
    <TabNavItem
      key={option}
      isActive={active === option}
      onClick={() => {
        onChange(option);
      }}
    >
      {option.toUpperCase()}
    </TabNavItem>
  ));

  return <TabNav>{TabItems}</TabNav>;
};
