import { SettingsContext } from "@/contexts/settings-context";
import { useContext } from "react";

export function useSettingsContext(){
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettingsContext must be used within a useSettingsContext");
  }
  return context;
}