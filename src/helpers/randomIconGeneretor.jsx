import { GiDwarfFace } from "react-icons/gi";
import { GiSpiderFace } from "react-icons/gi";
import { GiWitchFace } from "react-icons/gi";
import { GiWizardFace } from "react-icons/gi";
import { GiWomanElfFace } from "react-icons/gi";
import { GiDoubleDragon } from "react-icons/gi";

const icons = [
  <GiDwarfFace size={18} />,
  <GiSpiderFace size={18} />,
  <GiWitchFace size={18} />,
  <GiWizardFace size={18} />,
  <GiWomanElfFace size={18} />,
  <GiDoubleDragon size={18} />,
];

export const getRandomIcon = () => {
  return icons[Math.floor(Math.random() * icons.length)];
};
