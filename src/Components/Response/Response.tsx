import Word from "./Word";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";
import { useDictionaryStore } from "../../store/dictionaryStore";

const Response = () => {
  const jsonData = useDictionaryStore((state) => state?.response?.jsonData);
  const error = useDictionaryStore((state) => state?.response?.error);
  const loading = useDictionaryStore((state) => state?.response?.loading);
  const theme = useDictionaryStore((state) => state.theme);
  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }

  const LoadingComponent = () => {
    return (
      <div className="relative mx-[auto] w-[100px]">
        <p
          className="absolute text-center animate-rotate"
          style={{
            color: activeTheme.secondary,
          }}
        >
          ꃋᴖꃋ
        </p>
      </div>
    );
  };

  const ErrorComponent = () => {
    return (
      <div>
        <p className="text-[18px] text-center mb-[13px]">🙁</p>
        <p
          className="text-[18px] font-bold text-center mb-[13px]"
          style={{
            color: activeTheme.secondary,
          }}
        >
          No Definitions Found
        </p>
        <p
          className="text-[18px] text-center mb-[13px]"
          style={{
            color: activeTheme.primary,
          }}
        >
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  };

  return (
    <div className="w-full">
      {jsonData[0]?.word && (
        <>
          <Word jsonData={jsonData} />
          <Noun jsonData={jsonData} />
          <Verb jsonData={jsonData} />
          <Source jsonData={jsonData} />
        </>
      )}
      {loading && <LoadingComponent />}
      {error && <ErrorComponent />}
    </div>
  );
};

export default Response;
