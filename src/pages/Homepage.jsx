import React from 'react';
import Header from '../components/General/Header';
import PhotoGallery from '../components/Homepage/PhotoGallery';
import Radio from '../images/radio.svg';
import CoffeeImg from '../images/coffee.png';
import LionImg from '../images/lion.png';

import styled from 'styled-components';

const RadioWrapper = styled.div`
    background-color: #2eadb6;
    height: 30px; 
    width: 50%;
    margin-top: 25px;
    color: white;
    border-radius: 10px;
    padding: 15px 0 5px 35px;
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;

    display: flex;
    align-items: center;
`

const RadioIcon = styled.img`
    height: 25px;
    width: 25px; 
    margin-right: 25px; 
`

const ChatSpressoWrapper = styled.div`
    width: 350px;
    height: 500px;
    border-radius: 10px;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    background-color: #2eadb6;
    cursor: pointer;
    padding: 10px;
    margin: 25px 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const EventTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
`
const EventDesc = styled.div`
    font-size: 118pxx;
`

const TheDenWrapper = styled.div`
    width: 350px;
    height: 500px;
    border-radius: 10px;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    background-color: #2eadb6;
    cursor: pointer;
    padding: 10px;
    margin: 25px 50px;;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const EventsWrapper = styled.div`
    display: flex
`

const LilPhoto = styled.img`
    height: 75px;
    width: 75px;
`

const Homepage = () => {
    return (
        <div>
            <Header /> 
            <div className='page-container'>
            <RadioWrapper> <RadioIcon src={Radio} />  Listen to NBS Radio!      Now playing Joe Garner's End of Year Review </RadioWrapper>
            <PhotoGallery />
            <EventsWrapper>
            <ChatSpressoWrapper> 
                <EventTitle> ChatSpresso <LilPhoto src={CoffeeImg} /> </EventTitle>
                <EventDesc> Sometimes in our career journey, it’s great to experience it through someone else’s eyes, we have colleagues who can share their experiences and wealth of knowledge in this spot, join us on Fridays at 3pm for  varied interesting topics that would give an insight into our world at NBS . <br></br><br></br>
If there is an area that you are interested in, please leave a note here and you would be connected to that colleague to walk you through their career journey and how it has made an impact to the society.</EventDesc>
            </ChatSpressoWrapper>
            <TheDenWrapper>
                <EventTitle> The Den <LilPhoto src={LionImg} /> </EventTitle>
                <EventDesc> Do you want a quick break from your computer? Would you like to meet people with similar interest, then this is the space for you.<br></br><br></br>
Come here to connect with people of like minds to decompress during your workday.<br></br><br></br>
If you are a dog or cat lover you can share pictures, experiences and stories.<br></br><br></br>
Are you an Aventura, share the sights and experiences on your journey around the world<br></br><br></br>
Do you love cars and anything that moves, you have found a place.<br></br><br></br>
Are you a foodie, do you see the world through food, then you got a spot here<br></br><br></br>
This space is not limited all interests are welcome!!!<br></br><br></br>
</EventDesc>
            </TheDenWrapper>

            </EventsWrapper>
            </div>
        </div>
    )
}

export default Homepage;