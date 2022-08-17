import React from "react";
import { Image } from "react-native";
import {
    StyledContainer,
    StyledGradient,
    StyledDiscoverImage,
    StyledTag,
    StyledTagText,
    StyledTitle,
    StyledDiscoverDate
} from './styles';

import { ScrollView } from "react-native";
import News from "../../components/News";

const Home = ({ navigation }: any) => {
    return (<ScrollView>
        <StyledContainer>
            <StyledGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#4C4478', '#0C0C69']}
            >
                <StyledTag>
                    <Image source={require('../../assets/iconly.soccer.png')} />
                    <StyledTagText>Football</StyledTagText>
                </StyledTag>
                <StyledTitle>
                    Zidane and Real Madrid: Where it went wrong and what's next
                </StyledTitle>
                <StyledDiscoverDate>
                    Tomorrow, 10:00 AM
                </StyledDiscoverDate>
                <StyledDiscoverImage source={require('../../assets/discover.image.png')} />
            </StyledGradient>
            <News navigation={navigation} />
        </StyledContainer>
    </ScrollView>
    );
}

export default Home;