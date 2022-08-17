import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyledContainer, StyledText } from './styles';

type LoaderProps = {
    name: string
}

const Loader = ({ name }: LoaderProps) => {
    return (<StyledContainer>
        <StyledText>Loading information about {name}{'\n'}it may take some time...</StyledText>
        <ActivityIndicator size={30} color="#808191" />
    </StyledContainer>)
}

export default Loader;