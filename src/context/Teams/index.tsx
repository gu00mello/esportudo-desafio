import * as React from 'react';
import { createContext, useContext } from 'react';
import RAPIDAPI from '../../services/Api';

type TeamsContextType = {
    getTeams: () => Promise<any>;
}

export const TeamsContext = createContext<TeamsContextType>({} as TeamsContextType);

export const TeamsProvider = ({ children }: any) => {
    const getTeams = async () => {
        try {
            const response = RAPIDAPI.get("/teams", {
                params: {
                    league: 3,
                    season: 2022
                }
            });

            return response;
        } catch (error) {
            return error;
        }
    }

    return <TeamsContext.Provider value={{ getTeams }}>
        {children}
    </TeamsContext.Provider>
}

export const useTeams = () => useContext(TeamsContext);