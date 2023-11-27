import { DictionaryModel } from "../../models/DictionaryModel";
import { useDictionaryStore } from "../../store/dictionaryStore";

interface VerbProps {
  jsonData: DictionaryModel[];
}

const Noun: React.FC<VerbProps> = (props) => {
  const theme = useDictionaryStore((state) => state.theme);
  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }
  const fontFamily = useDictionaryStore((state) => state.fontFamily);
  const verb = props.jsonData[0].meanings?.find(
    (el) => el.partOfSpeech === "verb"
  );

  return (
    <>
      {verb && (
        <>
          <div className="flex justify-start items-center mb-[31px] md:mb-[44px]">
            <h1
              className="mr-[25px] text-[18px] font-bold font-italic md:text-[24px]"
              style={{
                color: activeTheme.secondary,
                fontFamily,
              }}
            >
              verb
            </h1>
            <div
              className="w-full h-[1px] border-b"
              style={{
                borderColor:
                  theme.active === "light"
                    ? activeTheme.primary
                    : activeTheme.secondary,
              }}
            ></div>
          </div>
          <h2
            className="mb-[16px] text-[16px] md:text-[24px] mb-[27px]"
            style={{
              color: activeTheme.primary,
              fontFamily,
            }}
          >
            Meaning
          </h2>
          <div className="pb-[32px] md:pb-[39px]">
            <ul className="ml-[24px] list-disc md:ml-[40px]">
              {verb.definitions.map((definition) => {
                return (
                  <>
                    <li
                      className="text-[15px] mb-[13px] md:text-[20px]"
                      style={{
                        color: activeTheme.secondary,
                        fontFamily,
                      }}
                    >
                      {definition.definition}
                    </li>
                    {definition.example && (
                      <li
                        className="text-[15px] list-none md:text-[20px]"
                        style={{
                          color: activeTheme.primary,
                          fontFamily,
                        }}
                      >{`"${definition.example}"`}</li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </>
      )}
      <div
        className="w-full h-[1px] border-b mb-[24px]"
        style={{
          borderColor:
            theme.active === "light"
              ? activeTheme.primary
              : activeTheme.secondary,
        }}
      ></div>
    </>
  );
};

export default Noun;
