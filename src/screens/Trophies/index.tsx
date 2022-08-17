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
import { useTrophies } from "../../context/Trophies";

const Trophies = ({ navigation }: any) => {
    const { getTrophies } = useTrophies();

    const [loading, setLoading] = useState(true);
    const [trophies, setTrophies] = useState([]);

    useEffect(() => {
        getTrophies().then(response => {
            if (response.status === 200) {
                setTrophies(response.data.response);
                setLoading(false);
            } else setLoading(false);
        })
    }, []);

    return (
        <StyledContainer>
            <StyledTeam>
                <StyledTableImage
                    resizeMode="contain"
                    source={{ uri: "https://media.api-sports.io/football/players/374.png" }} />
                <StyledTableContent>
                    <StyledTableText>You are viewing trophies from</StyledTableText>
                    <StyledTableTitle>João Pedro Maturano dos Santos</StyledTableTitle>
                    <StyledTableText>Brazil</StyledTableText>
                </StyledTableContent>
            </StyledTeam>
            <Hairline />
            {loading ? <Loader name="Trophies" /> :
                <ScrollView>
                    {trophies.map((trophie: any, index: number) => {
                        return <StyledTable key={index} identifier={index}>
                            <StyledTableContent width={"100%"}>
                                <StyledTableTitle>{trophie.league}</StyledTableTitle>
                                <StyledTableText>{trophie.country} • {trophie.season}</StyledTableText>
                                <StyledTableText>{trophie.place}</StyledTableText>
                            </StyledTableContent>
                        </StyledTable>
                    })}
                </ScrollView>}
        </StyledContainer>
    );
}

export default Trophies;