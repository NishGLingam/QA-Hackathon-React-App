import React from 'react';
import styled from 'styled-components';

const EventTitle = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
color: #2eadb6;
`

const EventDesc = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 14px;
`

const EventItemHeader = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
`

const EventItemWrapper = styled.div`
    width: 750px;
    word-wrap: break-word;
    cursor: pointer;
    border: 1px #2eadb6 solid;
    border-radius: 10px;
    padding: 25px;
    margin: 15px 0;
`

const EventDate = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
color: #2eadb6;
`

const EventLocation = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 14px;
margin-top: 15px;
color: grey;

`

const EventItemFooter = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    color: black;
`



const EventItem = ( { title, date, desc, location}) => {
    return (
        <EventItemWrapper>
            <EventItemHeader>
                <EventTitle> {title} </EventTitle>
                <EventDate> {date} </EventDate>
            </EventItemHeader>
            <EventItemFooter>
                <EventDesc>  {desc} </EventDesc>
                <EventLocation> Location: {location} </EventLocation>
            </EventItemFooter>
        </EventItemWrapper>
    )
}

export default EventItem;