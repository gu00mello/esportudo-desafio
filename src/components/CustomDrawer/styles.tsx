import styled from 'styled-components';
import * as RN from 'react-native';

type TextStyle = {
    textStyle: string;
    textColor?: string;
}

type ViewStyle = {
    isContainer?: boolean;
    backgroundColor?: string;
    viewPadding?: string;
}

export const StyledImage = styled(RN.Image)`
    width: 80px;
    height: 80px;
    border-radius: 100px;
    margin: 0 0 10px 0;
`;

export const StyledView = styled(RN.View) <ViewStyle>`
    ${prop => prop.isContainer ? 'flex: 1;' : null};
    padding: ${prop => prop.viewPadding || '0'};
    background-color: ${prop => prop.backgroundColor || '#252836'}; 
`;

export const StyledText = styled(RN.Text) <TextStyle>`
    color: ${prop => prop.textColor || '#808191'};
    font-size: ${prop => prop.textStyle === 'primary' ? '18px' : '14px'};
    font-weight: ${prop => prop.textStyle === 'primary' ? '600' : '400'};
`;