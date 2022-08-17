import React, { createContext, useContext } from 'react';
import RAPIDAPI from '../../services/Api';

type PlayersContextType = {
    getPlayers: () => Promise<any>;
}

export const PlayersContext = createContext<PlayersContextType>({} as PlayersContextType);

export const PlayersProvider = ({ children }: any) => {
    const getPlayers = async () => {
        try {
            const response = RAPIDAPI.get("/players", {
                params: {
                    season: 2022,
                    team: 131
                }
            });

            return response;
        } catch (error) {
            return error;
        }
    }

    return <PlayersContext.Provider value={{ getPlayers }}>
        {children}
    </PlayersContext.Provider>
}

export const usePlayers = () => useContext(PlayersContext);