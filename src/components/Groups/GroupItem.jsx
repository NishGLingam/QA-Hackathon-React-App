import React from 'react';
import styled from 'styled-components';
import TalkClub from '../../images/talkClub.png';

const GroupIcon = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 100%;
    border: 2px white solid;
`

const GroupTitle = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
color: #2eadb6;
`

const GroupDesc = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 14px;
color: #2eadb6;
`

const GroupItemHeader = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 15px;
`

const GroupItemWrapper = styled.div`
    width: 750px;
    word-wrap: break-word;
    cursor: pointer;
    border: 1px #2eadb6 solid;
    border-radius: 10px;
    padding: 25px;
    margin: 15px 0;
`

const GroupItem = (props) => {
    return (
        <GroupItemWrapper>
            <GroupItemHeader>
                <GroupIcon src={props.imgLink}/>
                <GroupTitle> {props.title} </GroupTitle>
            </GroupItemHeader>
            <GroupDesc>  {props.description} </GroupDesc>
        </GroupItemWrapper>
    )
}

export default GroupItem;