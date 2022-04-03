import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [sidebarConfig, setSidebarConfig] = useState({
    isOpen: true,
  });

  return (
    <SidebarContext.Provider
      value={{
        setSidebarConfig,
        sidebarConfig
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const { sidebarConfig,setSidebarConfig } = useContext(SidebarContext);
  return { sidebarConfig,setSidebarConfig };
}