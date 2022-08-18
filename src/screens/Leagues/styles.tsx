import styled from "styled-components";
import * as RN from 'react-native';

type ContainerProps = RN.ViewProps & {
    children?: React.ReactNode | React.ReactNode[];
}

type LeagueProps = RN.ViewProps & {
    identifier: number;
}

export const StyledContainer = styled(RN.View) <ContainerProps>`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledLeague = styled(RN.View) <LeagueProps>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    margin: 10px 0;
    background-color: ${prop => prop.identifier % 2 === 0 ? 'transparent' : '#252836'};
`;

export const StyledLeagueImage = styled(RN.Image)`
    width: 35%;
    height: 100%;
    border-radius: 10px;
`;

export const StyledLeagueContent = styled(RN.View)`
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 0 0 10px;
`;

export const StyledLeagueTitle = styled(RN.Text)`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 5px 0;
`;

export const StyledLeagueText = styled(RN.Text)`
    font-size: 14px;
    color: #808191;
    margin: 0 0 5px 0;
`;
