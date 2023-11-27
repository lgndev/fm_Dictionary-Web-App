import logo from "../assets/images/logo.svg";
import moon_light from "../assets/images/icon-moon-light.svg";
import moon_dark from "../assets/images/icon-moon-dark.svg";
import icon_arrow_down from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import { useDictionaryStore } from "../store/dictionaryStore";

const Header = () => {
  const [showFontSelect, setShowFontSelect] = useState(false);
  const setTheme = useDictionaryStore((state) => state.setTheme);
  const theme = useDictionaryStore((state) => state.theme);
  let activeTheme = theme.light;
  if (theme.active === "dark") {
    activeTheme = theme.dark;
  }
  const fontFamily = useDictionaryStore((state) => state.fontFamily);
  const setFontFamily = useDictionaryStore((state) => state.setFontFamily);

  return (
    <div className="w-full flex justify-end items-center mb-[52px] md:mb-[51.5px]">
      <img
        src={logo}
        alt="logo"
        className="mr-[auto] w-[28px] h-[32px] md:w-[32px] h-[36.5px]"
      />
      <button
        type="button"
        onClick={() => {
          setShowFontSelect((prevState) => {
            return !prevState;
          });
        }}
        className="flex items-center text-[14px] font-bold relative md:text-[18px]"
        style={{
          color: activeTheme.secondary,
          fontFamily,
        }}
      >
        <p style={{ minWidth: "90px" }}>
          {" "}
          {fontFamily === "sans-serif"
            ? "Sans Serif"
            : fontFamily === "serif"
            ? "Serif"
            : "Mono"}
        </p>

        <img
          src={icon_arrow_down}
          alt="arrow down"
          className="w-[12px] h-[6px] mx-[16px] md:mx-[21px] w-[12px] h-[6px]"
        />
        <div
          className={`${
            showFontSelect ? "block" : "hidden"
          } fontSelect absolute p-[16px] rounded-[8px] text-[14px] right-[0] top-[0] mt-[30px] mr-[16px] text-left z-10`}
          style={{
            boxShadow:
              theme.active === "light"
                ? "0px 0px 10px 5px rgba(0,0,0,0.25)"
                : "0px 0px 10px 5px rgba(164, 69, 237, .25)",
            color: activeTheme.secondary,
            backgroundColor: activeTheme.background,
          }}
        >
          <p
            style={{ fontFamily: "sans-serif" }}
            data-font="sans-serif"
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.stopPropagation();
              if ("dataset" in e.currentTarget) {
                const dataValue = e.currentTarget.dataset.font;
                if (dataValue) {
                  setFontFamily(dataValue);
                }
              }
              setShowFontSelect((prevState) => {
                return !prevState;
              });
            }}
          >
            Sans Serif
          </p>
          <p
            style={{ fontFamily: "serif" }}
            data-font="serif"
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.stopPropagation();
              if ("dataset" in e.currentTarget) {
                const dataValue = e.currentTarget.dataset.font;
                if (dataValue) {
                  setFontFamily(dataValue);
                }
              }
              setShowFontSelect((prevState) => {
                return !prevState;
              });
            }}
          >
            Serif
          </p>
          <p
            style={{ fontFamily: "monospace" }}
            data-font="monospace"
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
              e.stopPropagation();
              if ("dataset" in e.currentTarget) {
                const dataValue = e.currentTarget.dataset.font;
                if (dataValue) {
                  setFontFamily(dataValue);
                }
              }
              setShowFontSelect((prevState) => {
                return !prevState;
              });
            }}
          >
            Mono
          </p>
        </div>
      </button>
      <div
        className="w-[1px] h-[32px] border-r"
        style={{
          borderRightColor:
            theme.active === "light"
              ? activeTheme.primary
              : activeTheme.secondary,
        }}
      ></div>
      <button
        type="button"
        onClick={setTheme}
        className={`ml-[16px] mr-[12px] w-[40px] h-[20px] rounded-[10px] flex justify-start items-center md:ml-[26px] mr-[20px]`}
        style={{
          backgroundColor:
            theme.active === "light" ? activeTheme.primary : activeTheme.accent,
          justifyContent: theme.active === "light" ? "flex-start" : "flex-end",
        }}
      >
        <div className="w-[14px] h-[14px] bg-[#ffffff] rounded-[50%] ml-[3px] mr-[3px]"></div>
      </button>
      {theme.active === "light" ? (
        <img src={moon_light} alt="light theme image" />
      ) : (
        <img src={moon_dark} alt="dark theme image" />
      )}
    </div>
  );
};

export default Header;
