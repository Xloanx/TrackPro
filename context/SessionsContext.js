'use client'

import React, { createContext, useContext, useState } from 'react';

const SessionsContext = createContext();

export const SessionsProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  
  return (
    <SessionsContext.Provider value={{ session, setSession }}>
      {children}
    </SessionsContext.Provider>
  );
};

export const useSessions = () => useContext(SessionsContext);
