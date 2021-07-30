import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGroup } from '../../actions/actions';
import NWLogo from '../../images/NWLogoSmall.png'

const EditModal = ( {modalActive, modalHandler }) => {

    
    const dispatch = useDispatch();
    const [groupName, setGroupName] = useState('');
    const [groupDesc, setGroupDesc] = useState('');
    const [people, setPeople] = useState([]);

    const submitHandler = (e) => {
        console.log(groupName)
        e.preventDefault();
        const newGroup = 
        {
            image: NWLogo,
            title: groupName,
            description: groupDesc,
        }

        dispatch(addGroup(newGroup));
        modalHandler();
    }

    return (
            modalActive && 
            <div>
                <div className='modal-overlay'> 
                </div>
                <form className = 'add-group-modal' onSubmit = {submitHandler}> 
                    <span className = 'close-modal' onClick={modalHandler}> &#10006; </span>    
                    <div> Group Name: <input type = 'text' id='groupName' onChange={event => setGroupName(event.target.value)}/> </div>
                    <div> Group Description: <textarea type = 'text' id='groupDesc' onChange={event => setGroupDesc(event.target.value)}/> </div>                 
                    <div> Add People: <input type = 'text' id='people' onChange={event => setPeople(event.target.value)}/> </div>                 
                    <input className='add-group' type = 'submit' value = 'Submit' />               
                </form>
            </div>
    )
}

export default EditModal;