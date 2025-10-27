import { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursorStyle, setCursorStyle] = useState('default');

  const value = { cursorStyle, setCursorStyle };

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  return useContext(CursorContext);
}
