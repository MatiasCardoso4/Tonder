import { CardTypes } from "./CardTypes";

export interface CardProps {
  profile: CardTypes
  swipe: string;
  onHandleSwipe: (swipe: string, id: string) => void;
}