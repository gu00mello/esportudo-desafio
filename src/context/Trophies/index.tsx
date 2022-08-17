import React, { createContext, useContext } from 'react';
import RAPIDAPI from '../../services/Api';

type TrophiesContextType = {
    getTrophies: () => Promise<any>;
}

export const TrophiesContext = createContext<TrophiesContextType>({} as TrophiesContextType);

export const TrophiesProvider = ({ children }: any) => {
    const getTrophies = async () => {
        try {
            const response = RAPIDAPI.get("/trophies", {
                params: {
                    player: 374,
                }
            });

            return response;
        } catch (error) {
            return error;
        }
    }

    return <TrophiesContext.Provider value={{ getTrophies }}>
        {children}
    </TrophiesContext.Provider>
}

export const useTrophies = () => useContext(TrophiesContext);