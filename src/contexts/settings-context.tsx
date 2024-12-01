"use client";

import { createContext, SetStateAction, useEffect, useState } from "react";

interface SettingsContextProps {
  scrollDirection: "up" | "down";
  setScrollDirection: SetStateAction<React.Dispatch<"up" | "down">>;
}

export const SettingsContext = createContext({} as SettingsContextProps);

export function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    function handleScroll() {
      const currentScrollY = window.scrollY;
      console.log("LAST SCROLL ", lastScrollY)
      console.log("CURRENT", currentScrollY)
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      }
      if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scrollend", handleScroll);

    return () => {
      window.removeEventListener("scrollend", handleScroll);
    };
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        scrollDirection,
        setScrollDirection,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
