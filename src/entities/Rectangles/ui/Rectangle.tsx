import { RectangleResponse } from "../model/types/type";
import cls from "./Rectangle.module.scss";

interface RectangleProps extends RectangleResponse {
  currentTime: number;
}

export const Reactangle = ({
  currentTime,
  zone,
  timestamp,
  duration,
}: RectangleProps) => {
  if (currentTime >= timestamp && currentTime <= timestamp + duration) {
    return <div className={cls.Rectangle} style={{ ...zone }} />;
  }
  return null;
};
