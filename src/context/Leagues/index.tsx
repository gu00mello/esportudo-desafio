import React, { createContext, useContext } from 'react';
import RAPIDAPI from '../../services/Api';

type LeaguesContextType = {
    getLeagues: () => Promise<any>;
}

export const LeaguesContext = createContext<LeaguesContextType>({} as LeaguesContextType);

export const LeaguesProvider = ({ children }: any) => {
    const getLeagues = async () => {
        try {
            const response = RAPIDAPI.get('/leagues');

            return response;
        } catch (error) {
            return error;
        }
    }

    return <LeaguesContext.Provider value={{ getLeagues }}>
        {children}
    </LeaguesContext.Provider>
}

export const useLeagues = () => useContext(LeaguesContext);