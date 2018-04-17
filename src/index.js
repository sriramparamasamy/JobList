import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import App1 from './components/app'; 
import PostJobs from './postjobs/postjobs';


const store = createStore(allReducers);

ReactDOM.render(<Provider store ={store}><PostJobs/></Provider>, document.getElementById('root'));
registerServiceWorker();
