import { createContext, useState, useContext } from "react";
import { NAV_LINKS } from "@/config/constans";

const TabContext = createContext(null);

const useTab = () => useContext(TabContext);

const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const getActiveTabContent = () => {
    const page = location.pathname.replace(/\//g, "");
    const activeTabContent = NAV_LINKS[page.toUpperCase()].items.find(
      (items) => items.name.toLowerCase() === activeTab.toLowerCase()
    );
    return activeTabContent;
  };

  return (
    <TabContext.Provider value={{ activeTab, changeTab, getActiveTabContent }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabProvider, useTab };
