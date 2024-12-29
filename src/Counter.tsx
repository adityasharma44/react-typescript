import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext<CounterContextValue | null>(null);

export const useCounter =()=>{
    return useContext(CounterContext)
}

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setValue: (num: number) => void;
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [value, setValue] = useState<number>(1);
  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {props.children}
    </CounterContext.Provider>
  );
};
