import React, { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import {
    StyledContainer,
    StyledTable,
    StyledTableContent,
    StyledTableTitle,
    StyledTableImage,
    StyledTableText,
    Hairline,
    StyledTeam
} from '../Players/styles';
import Loader from "../../components/Loading";
import { useTeams } from "../../context/Teams";

const Teams = ({ navigation }: any) => {
    const { getTeams } = useTeams();

    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams().then(response => {
            if (response.status === 200) {
                setTeams(response.data.response);
                setLoading(false);
            } else setLoading(false);
        })
    }, []);

    return (
        <StyledContainer>
            <StyledTeam>
                <StyledTableImage
                    resizeMode="contain"
                    source={{ uri: "https://media.api-sports.io/football/leagues/3.png" }} />
                <StyledTableContent>
                    <StyledTableText>You are viewing teams from</StyledTableText>
                    <StyledTableTitle>UEFA Europa League</StyledTableTitle>
                    <StyledTableText>Cup • World</StyledTableText>
                </StyledTableContent>
            </StyledTeam>
            <Hairline />
            {loading ? <Loader name="Teams" /> :
                <ScrollView>
                    {teams.map((team: any, index: number) => {
                        return <StyledTable key={index} identifier={index}>
                            <StyledTableImage
                                resizeMode="contain"
                                source={{ uri: team.team.logo }} />
                            <StyledTableContent width={"100%"}>
                                <StyledTableTitle>{team.team.name}</StyledTableTitle>
                                <StyledTableText>{team.team.country} • {team.venue.city}</StyledTableText>
                            </StyledTableContent>
                        </StyledTable>
                    })}
                </ScrollView>}
        </StyledContainer>
    );
}

export default Teams;