import styled from "styled-components";
import * as RN from "react-native";

export const StyledView = styled(RN.View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #181829;
    elevation: 0;
`;

export const StyledText = styled(RN.Text)`
    color: #808191;
    font-size: 18px;
    font-weight: bold;
`;

export const StyledImage = styled(RN.Image)`
    width: 24px;
    height: 24px;
`;