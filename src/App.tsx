import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Response from "./Components/Response/Response";
import { useDictionaryStore } from "./store/dictionaryStore";

const App = () => {
  const theme = useDictionaryStore((state) => state.theme);

  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }

  return (
    <>
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          backgroundColor: activeTheme.background,
        }}
      >
        <div className="w-full h-full overflow-x-hidden px-[24px] py-[24px] md:px-[39px] md:py-[58px] lg:max-w-[736px]">
          <Header />
          <Input />
          <Response />
        </div>
      </div>
    </>
  );
};

export default App;
