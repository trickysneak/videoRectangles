import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useEffect, useRef, useState } from "react";
import { getCoordinates } from "entities/Rectangles/model/services/GetCoordinates";
import { Player } from "widgets/Player";
import { RectangleSelector } from "entities/Rectangles";
import { RectangleZone } from "entities/Rectangles/model/types/type";
import { TimeCodes } from "feature/Timecodes";
import cls from "./MainPage.module.scss";

export default function MainPage() {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeZone, setActiveZone] = useState<RectangleZone>();
  const [activeTimeStamp, setActiveTimeStamp] = useState<number>(0);

  const dispatch = useDispatch();
  const { data: rectanglesData } = useSelector(RectangleSelector);

  const playerRef = useRef(null);

  useEffect(() => {
    dispatch(getCoordinates());
  }, [getCoordinates]);

  const onTimeCodeUpdate = () => {
    setCurrentTime(playerRef.current.currentTime * 1000);
  };

  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      <div className={cls.VideoContainer}>
        <div className={cls.VideoRectangles}>
          <Player playerRef={playerRef} onTimeUpdate={onTimeCodeUpdate} />
        </div>
        <TimeCodes
          rectanglesData={rectanglesData}
          setActiveZone={setActiveZone}
          playerRef={playerRef}
          setTimeStamp={setActiveTimeStamp}
          activeTimeStamp={activeTimeStamp}
          currentTime={currentTime}
          activeZone={activeZone}
        />
      </div>
    </div>
  );
}
