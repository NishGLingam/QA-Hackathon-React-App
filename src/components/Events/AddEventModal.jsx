import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../actions/actions';
import NWLogo from '../../images/NWLogoSmall.png';
import styled from 'styled-components';
import Select from 'react-select';


const SelectWrapper = styled(Select)`
`
const EditModal = ( {modalActive, modalHandler }) => {


    
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [attendees, setAttendees] = useState('');
    const [description, setDescription] = useState([]);

    const options = [
        { value: 'name', label: 'Bunmi Ogunbiyi' },
        { value: 'name', label: 'Ali Tariq' },
        { value: 'name', label: 'Nish Lingam' },
        { value: 'name', label: 'Jackie Tinson' },
        { value: 'name', label: 'Abdurahman Ali' },
        { value: 'name', label: 'Oliver Bird' },
        { value: 'name', label: 'Dan Morris' },
        { value: 'name', label: 'Sakeena Ali' },
        { value: 'name', label: 'Gul Ali' },
        { value: 'name', label: 'Sajjad Ali' },
        { value: 'name', label: 'Anthony Porter' },
        { value: 'name', label: 'Jack Canning' },
        { value: 'name', label: 'Augusto Rainaldi' },
        { value: 'name', label: 'Nadia Shaik' },
        { value: 'name', label: 'Mark Bates' },
        { value: 'name', label: 'David Miles' },
        { value: 'name', label: 'Jaye Peacey' },
        ];



    const submitHandler = (e) => {
        e.preventDefault();
        const newEvent = 
        {
            date,
            title,
            location,
            attendees,
            description,
        }

        dispatch(addEvent(newEvent));
        modalHandler();
    }

    return (
            modalActive && 
            <div>
                <div className='modal-overlay'> 
                </div>
                <form className = 'edit-modal' onSubmit = {submitHandler}> 
                    <img src={NWLogo} alt='NWLogo' className='modal-logo' />
                    <span className = 'close-modal' onClick={modalHandler}> &#10006; </span>    
                    <div>
                        <div className='add-event-modal-content'> Date: <input type = 'text' id='date' onChange={event => setDate(event.target.value)}/> </div>
                        <div className='add-event-modal-content'> Title: <input type = 'text' id='title' onChange={event => setTitle(event.target.value)}/> </div>                 
                        <div className='add-event-modal-content'> Location: <input type = 'text' id='location' onChange={event => setLocation(event.target.value)}/> </div>      
                        <div className='add-event-modal-content'> Attendees: <SelectWrapper options={options} placeholder=''/> </div>
                        <div className='add-event-modal-content'> Description: <textarea type = 'text' id='description' onChange={event => setDescription(event.target.value)}/> </div> 
                    </div>                    
                    <input className='add-group' type = 'submit' value = 'Submit' />               
                </form>
            </div>
    )
}

export default EditModal;