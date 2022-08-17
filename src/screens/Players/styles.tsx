import styled from "styled-components";
import * as RN from 'react-native';

type ContainerProps = RN.ViewProps & {
    children?: React.ReactNode | React.ReactNode[];
}

type TableProps = RN.ViewProps & {
    identifier: number;
}

type TableContentProps = RN.ViewProps & {
    width?: number | string;
}

export const StyledContainer = styled(RN.View) <ContainerProps>`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledTable = styled(RN.View) <TableProps>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    margin: 10px 0;
    background-color: ${prop => prop.identifier % 2 === 0 ? 'transparent' : '#252836'};
`;

export const StyledTableImage = styled(RN.Image)`
    width: 20%;
    height: 100%;
    border-radius: 10px;
`;

export const StyledTableContent = styled(RN.View) <TableContentProps>`
    width: ${prop => prop.width || '80%'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 0 0 10px;
`;

export const StyledTableTitle = styled(RN.Text)`
    font-size: 16px;
    font-family: Roboto;
    font-weight: bold;
    color: #fff;
    margin: 0 0 5px 0;
`;

export const StyledTableText = styled(RN.Text)`
    font-size: 14px;
    font-family: Roboto;
    color: #808191;
    margin: 0 0 5px 0;
`;

export const Hairline = styled(RN.View)`
    width: 100%;
    height: 1px;
    background-color: #252836;
`;

export const StyledTeam = styled(RN.View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    margin: 10px 0;
`;
