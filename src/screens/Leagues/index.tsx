import * as  React from "react";
import { useState, useEffect } from "react";
import { useLeagues } from "../../context/Leagues";
import { ScrollView } from "react-native";
import {
    StyledContainer,
    StyledLeague,
    StyledLeagueContent,
    StyledLeagueTitle,
    StyledLeagueImage,
    StyledLeagueText
} from './styles';
import Loader from "../../components/Loading";

const Leagues = ({ navigation }: any) => {
    const { getLeagues } = useLeagues();

    const [loading, setLoading] = useState(true);
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        getLeagues().then(response => {
            if (response.status === 200) {
                setLeagues(response.data.response);
                setLoading(false);
            } else setLoading(false);
        })
    }, []);

    return (
        <StyledContainer>
            {loading ? <Loader name="Leagues" /> :
                <ScrollView>
                    {leagues.map((league: any, index: number) => {
                        return <StyledLeague key={index} identifier={index}>
                            <StyledLeagueImage
                                resizeMode="contain"
                                source={{ uri: league.league.logo }} />
                            <StyledLeagueContent>
                                <StyledLeagueTitle>{league.league.name}</StyledLeagueTitle>
                                <StyledLeagueText>League  •  {league.country.name} - {league.country.code}</StyledLeagueText>
                                <StyledLeagueText>Season 2022</StyledLeagueText>
                            </StyledLeagueContent>
                        </StyledLeague>
                    })}
                </ScrollView>}
        </StyledContainer>
    );
}

export default Leagues;