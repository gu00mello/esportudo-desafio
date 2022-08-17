import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
    StyledContainer,
    StyledNewsHeader,
    StyledTitle,
    StyledText,
    StyledNotice,
    StyledNoticeImage,
    StyledNoticeContent,
    StyledNoticeTitle,
    StyledNoticeText,
    StyledNoticeAuthor
} from './styles';

type NoticeProps = {
    title: string,
    complete_title: string,
    image: ImageSourcePropType & string,
    views: string,
    posted: string,
    author: string
}

const News = ({ navigation }: any) => {
    const news = [
        {
            title: 'Ronaldo pushing for Man City move',
            complete_title: 'LIVE Transfer Talk: Ronaldo pushing for Man City move',
            image: require('../../assets/notice.1.jpg'),
            views: '125,908',
            posted: '2 days ago',
            author: 'Gusta Mello'
        },
        {
            title: "City to sign Kane? Top clubs' needs ahead...",
            complete_title: 'LIVE Transfer Talk: Ronaldo pushing for Man City move',
            image: require('../../assets/notice.2.jpg'),
            views: '125,908',
            posted: '2 days ago',
            author: 'Iarlen Aquiles'
        },
        {
            title: "Vinicius Jr.'s been too busy becoming...",
            complete_title: 'LIVE Transfer Talk: Ronaldo pushing for Man City move',
            image: require('../../assets/notice.3.jpg'),
            views: '125,908',
            posted: '2 days ago',
            author: 'Bruno Araujo'
        },
        {
            title: "Vinicius Jr.'s been too busy becoming...",
            complete_title: 'LIVE Transfer Talk: Ronaldo pushing for Man City move',
            image: require('../../assets/notice.3.jpg'),
            views: '125,908',
            posted: '2 days ago',
            author: 'Bruno Araujo'
        }
    ];

    return (
        <StyledContainer>
            <StyledNewsHeader>
                <StyledTitle>
                    Latest News
                </StyledTitle>
                <StyledText>
                    View all
                </StyledText>
            </StyledNewsHeader>
            {news.map((notice: NoticeProps, index: number) => {
                return <StyledNotice key={index}>
                    <StyledNoticeImage source={notice.image} />
                    <StyledNoticeContent>
                        <StyledNoticeTitle>
                            {notice.title}
                        </StyledNoticeTitle>
                        <StyledNoticeText>
                            {notice.views} views   •  {notice.posted}
                        </StyledNoticeText>
                        <StyledNoticeAuthor>
                            {notice.author}
                        </StyledNoticeAuthor>
                    </StyledNoticeContent>
                </StyledNotice>
            })}
        </StyledContainer>
    );
};

export default News;
