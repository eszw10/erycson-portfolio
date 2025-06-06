import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "../hooks";

type DarkModeContextProps = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: Readonly<DarkModeContextProps>) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode"
  );

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={useMemo(
        () => ({ isDarkMode, toggleDarkMode }),
        [isDarkMode, toggleDarkMode]
      )}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export { useDarkMode, DarkModeProvider };
