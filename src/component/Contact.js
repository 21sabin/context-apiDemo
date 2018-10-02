// import React, {Component} from 'react'; import PropTypes from 'prop-types';
// class Contact extends Component {     constructor(props) { super(props);
//    this.state = {             toggle: false         } }     showContact = ()
// => {         console.log("clicked",this.state);  this.setState({
// toggle:!this.state.toggle});     }     render() { const {contacts} =
// this.props;         const { toggle } =this.state; return (             <div
// className="container ">                 <div              style={{
//          marginTop: '50px',    padding: '30px'                 }}>
// {contacts.map(contact => (                         <div class="card">
//             <h5                                 class="card-title"
//                   style={{ padding: '10px',
// float:'left'             }}>{contact.name}<span style={{float:'right'}}>
//      <i className="fas fa-caret-down" onClick={this.showContact}></i>
//              </span></h5>                             { toggle ?( <div
// class="card-body">                                 <ul
// className="list-group">                                     <li
// className="list-group-item">{contact.name}</li>       <li
// className="list-group-item">{contact.phone}</li>              </ul>
//                   </div>):null}        </div>                     )) }
//          </div> </div>         )     } }; Contact.propTypes = {     email:
// PropTypes.string.isRequired,     phone: PropTypes.string.isRequired } export
// default Contact;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './context';
import AddContact from './AddContact';
import { Link } from 'react-router-dom';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        console.log("prdfsops")
    }
    showContact = () => {
        console.log("clicked", this.state);
        this.setState({
            toggle: !this.state.toggle
        });
    }
    onDeleteHandler(id, dispatch) {
        //    this.props.deleteContact();
        dispatch({type: "DELETE_CONTACT", payload: id})

    }
    render() {
        console.log(this.props, "props")
        const {name, email, phone, id} = this.props.contact;
        const {toggle} = this.state;

        return <Consumer>
            
            {value => {
                return (
                   
                    <div className="container ">
                    
                        <div
                            style={{
                            marginTop: '50px'
                        }}>
                            <div class="card">
                                <h5
                                    class="card-title"
                                    style={{
                                    padding: '10px',
                                    float: 'left'
                                }}>{name}
                                    <span
                                        style={{
                                        float: 'right'
                                    }}>
                                        <i
                                            className="fas fa-caret-down"
                                            style={{
                                            marginRight: '30px'
                                        }}
                                            onClick={this.showContact}></i>
                                        <i
                                            className="fas fa-times"
                                            style={{
                                            color: 'red',
                                            cursor: 'pointer'
                                        }}
                                            onClick={this
                                            .onDeleteHandler
                                            .bind(this, id, value.dispatch)}></i>
                                            <Link to={`/contact/edit/${id}`}><i class="fas fa-pen" style={{padding:'2px'}}></i></Link>
                                    </span>
                                </h5>
                                {toggle
                                    ? (
                                        <div class="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">{name}</li>
                                                <li className="list-group-item">{phone}</li>
                                            </ul>
                                        </div>
                                    )
                                    : null}

                            </div>

                        </div>
                    </div>
                )
            }}
        </Consumer>
    }
};

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default Contact;
