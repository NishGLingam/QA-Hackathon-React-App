import React from 'react';
import styled from 'styled-components';


import Header from '../components/General/Header';
import ProfileImage from '../images/ProfilePic.jpg';
import SkillImg from '../images/SkillChart.PNG';

const AboutMeContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 250px;
`
const ProfileWrapper = styled.div`
`

const ProfilePhoto = styled.img`
    height: 275px;
    width: 275px;
    border-radius: 100%;   
    border: 2px grey solid; 
    margin-top: 50px;
`;

const DescriptionWrapper = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    color: #2eadb6;
    margin-top: 100px;
`

const DescriptionTitle = styled.div`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
`

const DescriptionContent = styled.div`
    font-size: 18px;

    & div {
        margin-top: 15px;
    }
`

const SkillChart = styled.img`
    margin-right: 275px;
`
const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100vw;
`



const AboutMe = () => {
    return (
        <div>
            <Header />
            <div className="page-container">
                <div className="page-title"> Your Profile </div>
                <AboutMeContentWrapper>
                    <ProfileWrapper>
                        <ProfilePhoto src={ProfileImage} alt='profile image'/>
                        <button className='primary-button'> Edit </button>
                    </ProfileWrapper>
                    <ContentWrapper>
                        <DescriptionWrapper>
                            <DescriptionTitle> About Me </DescriptionTitle>
                            <DescriptionContent> 
                                <div> <b> Department: </b> Mainframe Engineering </div>
                                <div> <b> Skills: </b> Cobol, Confidence </div>
                                <div> <b> Rating: </b> 8.5 </div>
                                <div> <b> Interests: </b> Agile, Java </div>
                                <div> <b> Mentor: </b> Patrick Lines </div>
                            </DescriptionContent>
                        </DescriptionWrapper>
                        <SkillChart src={SkillImg} />
                    </ContentWrapper>
                </AboutMeContentWrapper>
            </div>
        </div>
    )
};

export default AboutMe;