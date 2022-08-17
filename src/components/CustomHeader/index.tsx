import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledView, StyledText, StyledImage } from "./styles";

type CustomHeaderProps = DrawerHeaderProps & {
    name: string
}

const CustomHeader = (props: CustomHeaderProps) => {
    return <StyledView>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <StyledImage source={require('../../assets/iconly.menu.png')} />
        </TouchableOpacity>
        <StyledText>{props.name}</StyledText>
        <TouchableOpacity>
            <StyledImage source={require('../../assets/iconly.search.png')} />
        </TouchableOpacity>
    </StyledView>
}

export default CustomHeader;