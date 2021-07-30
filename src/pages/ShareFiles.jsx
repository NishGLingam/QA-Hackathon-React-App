import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';


import Header from '../components/General/Header';
import ShareImg from '../images/ShareFilesImg.png';

const SelectWrapper = styled(Select)`
    width: 500px;
    margin-top: 50px;
`

const ShareFileImgWrapper = styled.img`
    height: 250px; 
    margin-top: 50px;
    margin-bottom: 50px;
`

const options = [
    { value: 'Bunmi Ogunbiyi', label: 'Bunmi Ogunbiyi' },
    { value: 'Nish Lingam', label: 'Nish Lingam' },
    { value: 'Jackie Tinson', label: 'Jackie Tinson' },
    { value: 'Ali Tariq', label: 'Ali Tariq' },
    { value: 'Abdurahman Ali', label: 'Abdurahman Ali' },
    { value: 'Oliver Bird', label: 'Oliver Bird' },
    { value: 'Dan Morris', label: 'Dan Morris' },
    { value: 'Sakeena Ali', label: 'Sakeena Ali' },
    { value: 'Gul Ali', label: 'Gul Ali' },
    { value: 'Sajjad Ali', label: 'Sajjad Ali' },
    { value: 'Anthony Porter', label: 'Anthony Porter' },
    { value: 'Jack Canning', label: 'Jack Canning' },
    { value: 'Augusto Rainaldi', label: 'Augusto Rainaldi' },
    { value: 'Nadia Shaik', label: 'Nadia Shaik' },
    { value: 'Mark Bates', label: 'Mark Bates' },
    { value: 'David Miles', label: 'David Miles' },
    { value: 'Jaye Peacey', label: 'Jaye Peacey' },
    ];

    
const ShareFiles = () => {

    const [name, setName] = useState('');

    const sendEmail = () => {
        const newString = name.value.replace(' ', '.');
        console.log(newString.concat('@nationwide.co.uk'));
        window.location.href = `mailto:${newString.concat('@nationwide.co.uk')}`
    }

    return (
        <div>
            <Header />
            <div className="page-container">
                <div className="page-title">
                    Share Files
                </div>
                <ShareFileImgWrapper src={ShareImg} alt='Share Files'/>
                <div className="page-subtitle">
                    Select a name below to send an email
                </div>
                <SelectWrapper options={options} onChange={setName}/>
             
                    <button className='primary-button' onClick={sendEmail}> Share </button>
            </div>
        </div>
    )
};

export default ShareFiles;