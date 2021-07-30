import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../../images/Logo1.png';
import ProfilePic from '../../images/ProfilePic.jpg';

const LogoWrapper = styled(Link)`
`

const Logo = styled.img`
  height: 275px;
  margin-left: 25px;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #2eadb6;

  display: flex;
  align-items: center;
`;

const MenuButton = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin: 5px 25px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover {
      border-bottom: 5px white solid;
    }
`;

const AccountWrapper = styled(Link)`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`

const AccountIcon = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 100%;
    border: 2px white solid;
`;

const AccountInfo = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  margin: 5px 15px;
`;

const Header = () => {
    return (
      <div>
        <HeaderWrapper>
          <LogoWrapper to='/'>
            <Logo src={LogoImage} alt='NW Logo' />
          </LogoWrapper>
            <MenuButton to='/people'> People </MenuButton> 
            <MenuButton to='/groups'> Groups </MenuButton> 
            <MenuButton to='/initiatives'> Initiatives </MenuButton> 
            <MenuButton to='/sharefiles'> Share Files </MenuButton>
            <MenuButton to='/events'> Events </MenuButton> 
            <MenuButton to='/support'> Support </MenuButton> 
            <AccountWrapper to='/aboutme'>
              <AccountIcon src={ProfilePic} />
              <AccountInfo> Ali Tariq </AccountInfo>
          </AccountWrapper>
        </HeaderWrapper>
      </div>
    )
};

export default Header;