import styled from "styled-components";
import * as RN from "react-native";

export const StyledContainer = styled(RN.View)`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50% 0 0 0;
`;

export const StyledText = styled(RN.Text)`
    font-size: 14px;
    font-family: Roboto;
    color: #808191;
    margin: 0 0 10px 0;
    text-align: center;
`;