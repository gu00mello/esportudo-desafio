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
import { useClassifications } from "../../context/Classifications";

const Classifications = ({ navigation }: any) => {
    const { getClassifications } = useClassifications();

    const [loading, setLoading] = useState(true);
    const [classifications, setClassifications] = useState([]);

    useEffect(() => {
        getClassifications().then(response => {
            if (response.status === 200) {
                setClassifications(response.data.response[0].league.standings.flat());
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
                    <StyledTableText>You are viewing classfications from</StyledTableText>
                    <StyledTableTitle>UEFA Europa League</StyledTableTitle>
                    <StyledTableText>Cup • World</StyledTableText>
                    <StyledTableText>2021</StyledTableText>
                </StyledTableContent>
            </StyledTeam>
            <Hairline />
            {loading ? <Loader name="Classifications" /> :
                <ScrollView>
                    {classifications.map((classfication: any, index: number) => {
                        return <StyledTable key={index} identifier={index}>
                            <StyledTableImage
                                resizeMode="contain"
                                source={{ uri: classfication.team.logo }} />
                            <StyledTableContent width={"100%"}>
                                <StyledTableTitle>{classfication.team.name}</StyledTableTitle>
                                <StyledTableText>Rank: {classfication.rank} • {classfication.group}</StyledTableText>
                                <StyledTableText>Points: {classfication.points}</StyledTableText>
                            </StyledTableContent>
                        </StyledTable>
                    })}
                </ScrollView>}
        </StyledContainer>
    );
}

export default Classifications;