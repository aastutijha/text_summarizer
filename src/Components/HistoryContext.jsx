import React, { createContext, useContext, useState, useEffect } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(historyFromLocalStorage);
  }, []);

  const addToHistory = (data, userId) => {
    setHistory((prevHistory) => {
      const userHistoryIndex = prevHistory.findIndex((entry) => entry.userId === userId);
  
      if (userHistoryIndex !== -1) {
        if (!prevHistory[userHistoryIndex].data) {
          prevHistory[userHistoryIndex].data = [];
        }
        prevHistory[userHistoryIndex].data.push(data);
      } else {
        const updatedHistory = [
          ...prevHistory,
          { userId, data: [data] }
        ];
        localStorage.setItem('history', JSON.stringify(updatedHistory));
        return updatedHistory;
      }
  
      localStorage.setItem('history', JSON.stringify(prevHistory));
      return prevHistory;
    });
  };
  
  const contextValue = {
    history,
    addToHistory,
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  return useContext(HistoryContext);
};
