import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Nav from './nav';
import AboutMe from './aboutme';
import contact from './contact';
import portfolio from './portfolio';
import resume from './resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <Nav/>
            </div>
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
          <Route path="/portfolio" component={portfolio}/>
          <Route path="/about" component={AboutMe}/>
          <Route path="/contact" component={contact}/>
          <Route path="/resume" component={resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;