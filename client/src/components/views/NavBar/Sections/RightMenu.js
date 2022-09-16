/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

function RightMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="nft">
      <a href="/museum" style={{fontFamily: 'GowunBatang-Regular', fontStyle: 'normal', fontSize: '20px', color: '#fff', letterSpacing: '0.3em'}}>
        ● NFT
      </a>
    </Menu.Item>
    <Menu.Item key="about" style={{marginTop: '47px'}}>
      <a href="/about" style={{fontFamily: 'GowunBatang-Regular', fontStyle: 'normal', fontSize: '20px', color: '#fff', letterSpacing: '0.1em'}}>
        ● ABOUT
      </a>
    </Menu.Item>
  </Menu>
  )
}

export default withRouter(RightMenu);

