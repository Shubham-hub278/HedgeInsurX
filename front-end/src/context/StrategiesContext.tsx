import React, { createContext, useContext, useState } from 'react';

const StrategiesContext = createContext({});

export const StrategiesProvider = ({ children }: any) => {
    const [selectedStrategy, setSelectedStrategy] = useState<any | null>(null);

    return (
        <StrategiesContext.Provider value={{ selectedStrategy, setSelectedStrategy }}>
            {children}
        </StrategiesContext.Provider>
    );
};

export const useStrategies = () => {
    const context = useContext(StrategiesContext);
    if (!context) {
        throw new Error('useStrategies must be used within a StrategiesProvider');
    }
    return context;
};
