import styled, { StyledComponent } from 'styled-components';
import * as RN from 'react-native';

type ContainerProps = RN.ViewProps & {
    children?: React.ReactNode | React.ReactNode[];
}

export const StyledContainer = styled(RN.View) <ContainerProps>`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StyledNewsHeader = styled(RN.View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5px 0;
`;

export const StyledTitle = styled(RN.Text)`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const StyledText = styled(RN.Text)`
    font-size: 12px;
    color: #808191;
    text-transform: uppercase;
`;

export const StyledNotice = styled(RN.View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px 0;
`;

export const StyledNoticeImage = styled(RN.Image)`
    width: 35%;
    height: 100%;
    border-radius: 10px;
    margin: 0 10px 0 0;
`;

export const StyledNoticeContent = styled(RN.View)`
    width: 65%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StyledNoticeTitle = styled(RN.Text)`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 5px 0;
`;

export const StyledNoticeText = styled(RN.Text)`
    font-size: 14px;
    color: #808191;
    margin: 0 0 5px 0;
`;

export const StyledNoticeAuthor = styled(RN.Text)`
    font-size: 14px;
    color: #9780B5;
`;