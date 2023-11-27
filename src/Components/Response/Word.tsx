import React from "react";
import { DictionaryModel } from "../../models/DictionaryModel";
import icon_play from "../../assets/images/icon-play.svg";
import { useDictionaryStore } from "../../store/dictionaryStore";

interface WordProps {
  jsonData: DictionaryModel[];
}

// https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react-
const Word: React.FC<WordProps> = (props) => {
  const theme = useDictionaryStore((state) => state.theme);
  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }
  const fontFamily = useDictionaryStore((state) => state.fontFamily);
  const saLicense = props.jsonData[0].phonetics?.find(
    (el) => el?.license?.name === "BY-SA 3.0"
  );

  const audioHandler = () => {
    // loop through phonetics arr
    // use "BY-SA 3.0" license audio
    if (saLicense) {
      const phoneticAudioElement = new Audio(saLicense.audio);
      phoneticAudioElement.play();
    }
  };

  return (
    <div className="flex justify-between items-center mb-[32px] md:mb-[42px]">
      <div>
        <p
          className="text-[32px] font-bold mb-[8px] md:text-[64px] mb-[11px]"
          style={{
            color: activeTheme.secondary,
            fontFamily,
          }}
        >
          {props.jsonData[0].word}
        </p>
        <p
          className="text-[18px] md:text-[24px]"
          style={{
            color: activeTheme.accent,
            fontFamily,
          }}
        >
          {props.jsonData[0].phonetic}
        </p>
      </div>
      {saLicense && (
        <button className="h-max" onClick={audioHandler}>
          <img
            src={icon_play}
            alt="audio play image"
            className="w-[48px] h-[48px] md:w-[75px] h-[75px]"
          />
        </button>
      )}
    </div>
  );
};

export default Word;
