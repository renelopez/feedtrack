import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


const MOUNT=document.getElementById('root');
const renderApp=Comp => ReactDOM.render(Comp,MOUNT);

if(module.hot){
    module.hot.accept('./routes',()=> {
        const NextApp=require('./routes').default;
        renderApp(<NextApp />);
    })
}
renderApp(<Routes />);
