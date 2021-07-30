import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../components/General/Header';
import EventItem from '../components/Events/EventItem';
import AddEventModal from '../components/Events/AddEventModal';
import ChatspressoImage from  '../images/ChatspressoImg.png';


const ButtonsWrapper = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0 25px;
    width: 100%;
`
const SearchWrapper = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;

    & input {
        height: 35px;
        font-size: 16px;
        margin-right: 25px;
        border-radius: 10px;
        outline: none;
    }
 `

 const AddWrapper = styled.div`
    margin-right: 150px;
 `

 const GroupEventsWrapper = styled.div`
    margin-top: 50px;
 `

 const ChatspressoImageWrapper = styled.img`
    height: 250px;
    width: 250px;
    margin-top: 50px;
`

const Events = () => {

    const [modalActive, setModalActive] = useState(false)
    
    const modalHandler = () => setModalActive(!modalActive);

    const eventItemArray = useSelector(state => state.events)

    return (
        <div>
            <div>
                <AddEventModal modalActive={modalActive} modalHandler={modalHandler}/>
            </div>
            <Header />
            <div className="page-container">
                <div className="page-title"> Nationwide Events </div>
                <div className="page-subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam. </div>
                <ChatspressoImageWrapper src={ChatspressoImage} />
                <ButtonsWrapper>
                <SearchWrapper>
                    <input type='text' placeholder='Search events...'/>    
                    <button className='primary-button'> Search </button> 
                </SearchWrapper>
                <AddWrapper>
                    <button className='primary-button' onClick={modalHandler}> Create event </button>
                </AddWrapper>  
                </ButtonsWrapper>
                <div className="page-title"> Search Results </div>
                <GroupEventsWrapper>
                    {eventItemArray.map((item => {
                        return (
                            <EventItem date={item.date} title={item.title} desc={item.description} location={item.location} />
                        )
                    }))}
                </GroupEventsWrapper>
            </div>    
        </div>
    )
};

export default Events;