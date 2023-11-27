import { DictionaryModel } from "../../models/DictionaryModel";
import { useDictionaryStore } from "../../store/dictionaryStore";

interface NounProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<NounProps> = (props) => {
  const theme = useDictionaryStore((state) => state.theme);
  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }
  const fontFamily = useDictionaryStore((state) => state.fontFamily);
  const noun = props.jsonData[0].meanings?.find(
    (el) => el.partOfSpeech === "noun"
  );

  return (
    <>
      {noun && (
        <>
          <div className="flex justify-start items-center mb-[32px] md:mb-[44px]">
            <h1
              className="mr-[16px] text-[18px] font-bold font-italic md:text-[24px]"
              style={{
                color: activeTheme.secondary,
                fontFamily,
              }}
            >
              noun
            </h1>
            <div
              className="w-full h-[1px] border-b "
              style={{
                borderColor:
                  theme.active === "light"
                    ? activeTheme.primary
                    : activeTheme.secondary,
              }}
            ></div>
          </div>
          <h2
            className="mb-[17px] text-[16px] md:text-[24px] mb-[27px]"
            style={{
              color: activeTheme.primary,
              fontFamily,
            }}
          >
            Meaning
          </h2>
          <ul className="ml-[24px] list-disc md:ml-[40px]">
            {noun.definitions.map((definition) => {
              return (
                <li
                  className="text-[15px] mb-[13px] md:text-[20px]"
                  style={{
                    color: activeTheme.secondary,
                    fontFamily,
                  }}
                >
                  {definition.definition}
                </li>
              );
            })}
          </ul>
          <div className="mb-[32px] flex justify-start items-center md:mb-[43px]">
            <h2
              className="mr-[24px] text-[16px] md:text-[24px] mr-[40px]"
              style={{
                color: activeTheme.primary,
                fontFamily,
              }}
            >
              Synonyms
            </h2>
            <p
              className=" text-[16px] font-bold md:text-[20px]"
              style={{
                color: activeTheme.accent,
                fontFamily,
              }}
            >
              {props.jsonData[0].meanings[0].synonyms[0]}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Noun;
