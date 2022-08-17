import * as React from 'react';
import { LeaguesProvider } from "./Leagues";
import { PlayersProvider } from './Players';
import { TrophiesProvider } from './Trophies';
import { TeamsProvider } from './Teams';
import { ClassificationsProvider } from './Classifications';

const Provider = ({ children }: any) => {
    return (
        <LeaguesProvider>
            <PlayersProvider>
                <TrophiesProvider>
                    <TeamsProvider>
                        <ClassificationsProvider>
                            {children}
                        </ClassificationsProvider>
                    </TeamsProvider>
                </TrophiesProvider>
            </PlayersProvider>
        </LeaguesProvider>
    )
};

export default Provider;