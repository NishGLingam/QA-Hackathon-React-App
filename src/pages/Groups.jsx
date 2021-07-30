import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'


import Header from '../components/General/Header';
import GroupItem from '../components/Groups/GroupItem';
import AddGroupModal from '../components/Groups/AddGroupModal';

import {searchGroup } from '../actions/actions';

const ButtonsWrapper = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    margin: 75px 0 25px;
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

 const GroupItemsWrapper = styled.div`
    margin-top: 50px;
 `

const Groups = () => {
    const [modalActive, setModalActive] = useState(false);
    const [searchFilter, setSearchFilter] = useState('')
    
    const modalHandler = () => setModalActive(!modalActive);



    const groupItemArray = useSelector(state => state.groups);
    const filter = useSelector(state=> state.filter);
    const dispatch = useDispatch();

    const searchGroups = () => {
        console.log(filter);
        dispatch(searchGroup(searchFilter));
    }


    return (
        <div>
            <div>
                <AddGroupModal modalActive={modalActive} modalHandler={modalHandler}/>
            </div>
            <Header />
            <div className="page-container">
                <div className="page-title"> Nationwide Groups </div>
                <div className="page-subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam. </div>
                <ButtonsWrapper>
                <SearchWrapper>
                    <input type='text' placeholder='Search groups...' onChange={event => setSearchFilter(event.target.value)} />    
                    <button className='primary-button' onClick={searchGroups}> Search </button> 
                </SearchWrapper>
                <AddWrapper>
                    <button className='primary-button' onClick={modalHandler}> Create Group </button>
                </AddWrapper>  
                </ButtonsWrapper>
                <div className="page-title"> Search Results </div>
                <GroupItemsWrapper>
                    {groupItemArray.map((item => {
                            if (filter === '') {
                                return (
                                    <GroupItem imgLink={item.image} title={item.title} description={item.description} />
                                )
                            }
                            else if (filter !== '' && item.title === filter) {
                                    return (
                                    <GroupItem imgLink={item.image} title={item.title} description={item.description} />
                                    )
                            } 
                            
                            
                        
                    }))}
                </GroupItemsWrapper>
            </div>    
        </div>
    )
};

export default Groups;