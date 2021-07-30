import React from 'react';

const RegisterModal = ({modalActive, modalHandler }) => {
    return (
        modalActive && 
        <div>
            <div className='modal-overlay'> 
            </div>
            <form className = 'add-group-modal' > 
                <span className = 'close-modal' onClick={modalHandler}> &#10006; </span>    
                <div>
                    <div className='add-event-modal-content'> Employee Number <input type = 'text' id='date' /> </div>
                    <div className='add-event-modal-content'> Email Address: <input type = 'text' id='title' /> </div>                 
                    <div className='add-event-modal-content'> Topic: <input type = 'text' id='location' /> </div>      
                    <div className='add-event-modal-content'> Availability: <input type = 'text' id='attendees' /> </div>
                    <div className='add-event-modal-content'> Background: <textarea type = 'text' id='description' /> </div> 
                </div>                    
                <input className='add-group' type = 'submit' value = 'Submit' />               
            </form>
        </div>
    )
}

export default RegisterModal