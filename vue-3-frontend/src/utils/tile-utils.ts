const ICON_LOCATIONS: any = {
  mountains: {
    icon: "/icons/lorc/originals/svg/mountains.svg",
    description: "Mountains",
  },
  forest: {
    icon: "./icons/delapouite/originals/svg/forest.svg",
    description: "Forest",
  },
  water: {
    icon: "icons/sbed/originals/svg/water-drop.svg",
    description: "Water",
  },
  valley: {
    icon: "./icons/lorc/originals/svg/valley.svg",
    description: "Valley",
  },
  player: {
    icon: "/icons/cathelineau/originals/svg/bad-gnome.svg",
    description: "player",
  },
};

export const mapTypeToIconInfo = (type: string | number): string => {
  const location = ICON_LOCATIONS[type].icon;
  console.log(location);
  return location;
};
