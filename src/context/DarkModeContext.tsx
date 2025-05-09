import { createContext, useContext, useEffect, useMemo, useState } from "react";

type DarkModeContextProps = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: Readonly<DarkModeContextProps>) {
  const [isDarkMode, setIsDarkMode] = useState<DarkModeContextType>(
    function () {
      const storedValue = localStorage.getItem("darkMode");
      return storedValue
        ? JSON.parse(storedValue)
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  );

  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode]!)}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { useDarkMode, DarkModeProvider };
