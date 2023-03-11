import { Reactangle } from "entities/Rectangles";
import {
  RectangleResponse,
  RectangleZone,
} from "entities/Rectangles/model/types/type";
import { RefObject } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { toTime } from "shared/lib/toTime/toTime";
import cls from "./Timecodes.module.scss";

interface TimecodesProps {
  rectanglesData: RectangleResponse[];
  setActiveZone: (v: RectangleZone) => void;
  playerRef: RefObject<HTMLVideoElement>;
  setTimeStamp: (timeStamp: number) => void;
  activeTimeStamp: number;
  currentTime: number;
  activeZone: RectangleZone;
}

export const TimeCodes = ({
  rectanglesData,
  setActiveZone,
  playerRef,
  setTimeStamp,
  activeTimeStamp,
  currentTime,
  activeZone,
}: TimecodesProps) => {
  const deepCopy = rectanglesData && [...rectanglesData];
  return (
    <div className={cls.TimeCodes}>
      {deepCopy
        ?.sort(
          (a: RectangleResponse, b: RectangleResponse) =>
            a.timestamp - b.timestamp
        )
        .map(({ timestamp, id, zone, duration }) => (
          <div key={id}>
            <Reactangle
              zone={activeZone}
              currentTime={currentTime}
              timestamp={timestamp}
              duration={duration}
            />
            <div
              className={classNames(
                cls.TimeCodesListItem,
                {
                  [cls.ActiveTimeCodesListItem]: activeTimeStamp === timestamp,
                },
                []
              )}
              onClick={() => {
                playerRef.current.currentTime = timestamp / 1000;
                setActiveZone(zone);
                setTimeStamp(timestamp);
              }}
            >
              {toTime(timestamp)}
            </div>
          </div>
        ))}
    </div>
  );
};
