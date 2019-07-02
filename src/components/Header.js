import React, { Component } from 'react'
import { Folder, Settings } from '@material-ui/icons';

import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='button-wrapper'>
          <button><Folder /></button>
        </div>
        <div className='header-wrapper'>
          <h2>ALBUM</h2>
        </div>
        <div className='button-wrapper'>
          <button><Settings /></button>
        </div>
      </header>
    )
  }
}
