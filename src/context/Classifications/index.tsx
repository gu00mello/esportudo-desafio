import * as React from 'react';
import { createContext, useContext } from 'react';
import RAPIDAPI from '../../services/Api';

type ClassificationsContextType = {
    getClassifications: () => Promise<any>;
}

export const ClassificationsContext = createContext<ClassificationsContextType>({} as ClassificationsContextType);

export const ClassificationsProvider = ({ children }: any) => {
    const getClassifications = async () => {
        try {
            const response = RAPIDAPI.get('/standings', {
                params: {
                    league: 3,
                    season: 2021
                }
            });

            return response;
        } catch (error) {
            return error;
        }
    }

    return <ClassificationsContext.Provider value={{ getClassifications }}>
        {children}
    </ClassificationsContext.Provider>
}

export const useClassifications = () => useContext(ClassificationsContext);