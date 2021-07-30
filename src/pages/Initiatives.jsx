import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Header from '../components/General/Header';
import MentoringImg from '../images/MentoringImg.png';
import BlogImg from '../images/blogpage.PNG';
import ResLibImg from '../images/ResLib.png';
import RegisterModal from '../components/Mentoring/RegisterModal';



const TwoColWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

`
 
const MentoringWrapper =styled.div`
    width: 50vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`

const MentoringImgWrapper = styled.img`
    height: 250px; 
`

const ResLibImgWrapper = styled.img`
    height: 250px; 
    margin-bottom: 50px;
`

const BlogImgWrapper = styled.img`
    height: 250px; 
`

const MentoringTitle = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    color: #2eadb6;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
`

const MentoringSubtitle = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    color: #2eadb6;
    font-size: 32px;
    margin-top: 50px;
`


const SelectWrapper = styled(Select)`
    margin-top: 15px;
    width: 500px;
`

const ResLibWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 25px;
`

const ResLibSub = styled.div`
font-family: 'Josefin Sans', sans-serif;
color: #2eadb6;
font-size: 32px;
margin-right: 50px;
`

const Initiatives = () => {

    const options = [
        { value: 'agile', label: 'Agile & Scrum' },
        { value: 'leadership', label: 'LeaderShip' },
        { value: 'presentation', label: 'Presentation' },
        { value: 'automation', label: 'Automation' } 
      ];

      const optionsreslib = [
        { value: 'videos', label: 'Videos' },
        { value: 'articles', label: 'Articles' },
        { value: 'e-learning', label: 'E-Learning' },
      ];
      const [modalActive, setModalActive] = useState(false)
    
    const modalHandler = () => setModalActive(!modalActive);


    return (
        <div>
            <Header />
            <div>
                <RegisterModal modalActive={modalActive} modalHandler={modalHandler}/>
            </div>
            <div className="page-container">
                <div className="page-title"> Initiatives </div>
                <TwoColWrapper>
                    <MentoringWrapper>
                        <MentoringTitle> Mentoring </MentoringTitle>
                        <MentoringImgWrapper src={MentoringImg} />
                        <MentoringSubtitle> Find a mentor </MentoringSubtitle>
                        <SelectWrapper options = {options} />
                        <MentoringSubtitle> Want to become a mentor? </MentoringSubtitle>
                        <button onClick={modalHandler} className="primary-button" > Register Here </button>
                    </MentoringWrapper>
                    <MentoringWrapper>
                        <MentoringTitle> Blogs </MentoringTitle>
                        <BlogImgWrapper src={BlogImg} />
                        <button className="primary-button"> See Recent Blogs</button>
                    </MentoringWrapper>
                </TwoColWrapper>
                <div className="page-container">
                    <MentoringTitle> Resource Library</MentoringTitle>
                    <ResLibImgWrapper src={ResLibImg} />
                    <ResLibWrapper>
                        <ResLibSub> Agile </ResLibSub>
                        <SelectWrapper options = {optionsreslib} /> 
                    </ResLibWrapper>
                    <ResLibWrapper>
                        <ResLibSub> Java </ResLibSub>
                        <SelectWrapper options = {optionsreslib} /> 
                    </ResLibWrapper>
                </div>
            </div>
        </div>
    )
};

export default Initiatives;