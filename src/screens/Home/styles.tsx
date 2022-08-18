import styled from "styled-components";
import * as RN from "react-native";
import * as LG from "react-native-linear-gradient";

export const StyledContainer = styled(RN.View)`
    position: relative;
    width: 100%;    
    box-sizing: border-box;
    padding: 20px;
`;

export const StyledGradient = styled(LG.default)`
    width: 100%;
    min-height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 16px;
    padding: 16px;
    margin: 0 0 20px 0;
`;

export const StyledDiscoverImage = styled(RN.Image)`
    position: absolute;
    bottom: 0;
    right: 16px;
    width: 50%;
    height: 194px;
`;

export const StyledTag = styled(RN.View)`
    background-color: #fff;
    border-radius: 50px;
    padding: 6px;
    flex-direction: row;
    align-items: center;
`;

export const StyledTagText = styled(RN.Text)`
    font-size: 12px;
    font-weight: 700;
    color: #000;
    margin: 0 0 0 5px;
`;

export const StyledTitle = styled(RN.Text)`
    max-width: 50%;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin: 5px 0;
`;

export const StyledDiscoverDate = styled(RN.Text)`
    font-size: 12px;
    font-weight: 500;
    color: #fff;
`;