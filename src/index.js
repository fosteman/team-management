import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TeamManagement from './TeamManagement';
import {BrowserRouter} from 'react-router-dom'; 

ReactDOM.render((
    <BrowserRouter>
      <TeamManagement />
    </BrowserRouter>
  ), document.getElementById('root'));
