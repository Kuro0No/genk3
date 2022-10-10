import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import './header.scss';
import { pathKeys } from '../../../constants';
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { DensityMedium, Close, Search } from '@mui/icons-material';
import Menu from './Menu';
import search from '../../../assets/icons/search.png';
import close from '../../../assets/icons/close.png';
import menu from '../../../assets/icons/menu.png';

const Header = () => {
  const activeStyle = { color: '#ed2e2e', fontWeight: 'bold' };
  const router = useHistory();
  const [openMenu, setOpenMenu] = useState(false);
  const [openINput, setOpenInput] = useState(false);
  const menuHeader = [
    {
      logo: 'https://static.mediacdn.vn/genk/web_images/logogenk.svg',
      pathName: pathKeys.ROOT,
    },
    {
      name: 'Mobile',
      pathName: '/mobile',
    },
    {
      name: 'TIN ICT',
      pathName: '/tinICT',
    },
    {
      name: 'INTERNET',
      pathName: '/internet',
    },
    {
      name: 'KHÁM PHÁ',
      pathName: '/khampha',
    },
    {
      name: 'XEM - MUA - LUÔN',
      pathName: '/xem-mua-luon',
    },
  ];
  return (
    <div className="header-wrapper">
      <AppBar position="static" className=" ">
        <div className="d-flex header-wrapper-child">
          <Toolbar className="toolBar ps-0">
            {menuHeader.map((item, index) => {
              if (item.logo) {
                return <img onClick={() => router.push(item.pathName)} className="pe-4" src={item.logo} />;
              } else {
                return (
                  <NavLink exact to={item.pathName} className="item-menu" activeStyle={activeStyle} key={`${index}`}>
                    {item.name}
                  </NavLink>
                );
              }
            })}
            <div onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <img className="icon-header" src={close} /> : <img src={menu} className="icon-header" />}
            </div>
          </Toolbar>
          <div className="item-right">
            <input className={`input ${openINput ? 'show' : ''}`} />
            <NavLink exact to="/video" className="item-menu" activeStyle={activeStyle}>
              Video
            </NavLink>

            <img src={search} onClick={() => setOpenInput(!openINput)} className="icon-header" />
          </div>
        </div>
      </AppBar>
      <Menu openMenu={openMenu} />
    </div>
  );
};

export default Header;
