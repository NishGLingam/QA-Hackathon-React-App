import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import Header from '../components/General/Header';
import PeopleImg from '../images/peopleImg.png';

const SelectWrapper = styled(Select)`
    width: 500px;
    margin-top: 20px;
`

const SearchHeader = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    color: #2eadb6;
    font-size: 32px;
    margin-top: 50px;
`

const PeopleImgWrapper = styled.img`
    height: 200px; 
`

const People = () => {

    const names = [
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

    const skills = [
        { value: 'Cobol', label: 'Cobol'},
        { value: 'Java', label: 'Java'},
        { value: 'Javascript', label: 'Javascript'},
        { value: 'HTML', label: 'HTML'},
        { value: 'Cobol', label: 'C#'},
    ]

    const departments = [
        { value: 'Payments', label: 'Payments'},
        { value: 'Mainframe', label: 'Mainframe'},
        { value: 'Open Banking', label: 'Open Banking'},

    ]
    
    return (
        <div>
            <Header />
            <div className="page-container">
                <div className="page-title"> People </div>
                <PeopleImgWrapper src={PeopleImg} />
                <SearchHeader> Search By Skill: </SearchHeader> <SelectWrapper options = {skills}/>
                <SearchHeader> Search By Name: </SearchHeader><SelectWrapper options = {names}/>
                <SearchHeader> Search By Department: </SearchHeader> <SelectWrapper options = {departments}/>
            </div>
        </div>
    )
};

export default People;