import * as  React from "react";
import { useState, useEffect } from "react";
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
} from './styles';
import Loader from "../../components/Loading";
import { usePlayers } from "../../context/Players";

const Players = ({ navigation }: any) => {
    const { getPlayers } = usePlayers();

    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers().then(response => {
            if (response.status === 200) {
                setPlayers(response.data.response);
                setLoading(false);
            } else setLoading(false);
        })
    }, []);

    return (
        <StyledContainer>
            <StyledTeam>
                <StyledTableImage
                    resizeMode="contain"
                    source={{ uri: "https://media.api-sports.io/football/teams/131.png" }} />
                <StyledTableContent>
                    <StyledTableText>You are viewing players from</StyledTableText>
                    <StyledTableTitle>Corinthians • 2022</StyledTableTitle>
                </StyledTableContent>
            </StyledTeam>
            <Hairline />
            {loading ? <Loader name="Players" /> :
                <ScrollView>
                    {players.map((player: any, index: number) => {
                        return <StyledTable key={index} identifier={index}>
                            <StyledTableImage
                                resizeMode="contain"
                                source={{ uri: player.player.photo }} />
                            <StyledTableContent>
                                <StyledTableTitle>{player.player.name}</StyledTableTitle>
                                <StyledTableText>{player.player.nationality} • {player.player.birth.place}</StyledTableText>
                                <StyledTableText>Height: {player.player.height}</StyledTableText>
                                <StyledTableText>Age: {player.player.age}</StyledTableText>
                            </StyledTableContent>
                        </StyledTable>
                    })}
                </ScrollView>}
        </StyledContainer>
    );
}

export default Players;