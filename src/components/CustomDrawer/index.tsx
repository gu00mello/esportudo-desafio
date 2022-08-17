import * as React from 'react';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyledView, StyledImage, StyledText } from './styles';

const CustomDrawer = (props: any) => {
    return <StyledView isContainer={true}>
        <DrawerContentScrollView {...props}
            contentContainerStyle={{ backgroundColor: '#252836' }}>
            <StyledView viewPadding='20px'>
                <StyledImage source={require('../../assets/logo.jpg')} />
                <StyledText textStyle='primary'>John Doe</StyledText>
                <StyledText textStyle='secondary'>johndoe@email.com</StyledText>
            </StyledView>
            <StyledView viewPadding='10px 0 0 0'>
                <DrawerItemList {...props} />
            </StyledView>
        </DrawerContentScrollView>
        <StyledView viewPadding='20px'>
            <StyledText textColor='#E84C88' textStyle='secondary'>Sair</StyledText>
        </StyledView>
    </StyledView>
}

export default CustomDrawer;