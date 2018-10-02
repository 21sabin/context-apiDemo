import React, {Component} from "react";
import Contacts from "./component/Contacts";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from './component/context';
import AddContact from './component/AddContact';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import About from './component/About';
import NotFound from './component/NotFound';
import EditContact from './component/EditContact';



class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Router>
                      <div>
                      <Header header="Contact Management"/>
                        <Switch>
                            <Route path="/" exact={true} component={Contacts}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact/edit/:id" component={EditContact}/>
                            <Route path="/contact/add" component={AddContact}/>
                            <Route component={NotFound} />
                        </Switch>
                      </div>
                        
                    </Router>
                </div>
            </Provider>

        );
    }
}

export default App;
