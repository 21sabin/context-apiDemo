import React, {Component} from 'react';
import {Consumer} from './context';
import uuid from 'uuid';
import TextGroup from './TextGroup';
import axios from 'axios';

class AddContact extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: "",
        email: "",
        phone: "",
        error: {}
    }

    handleSubmit = async(dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        if (this.state.name === "") {
            this.setState({
                error: {
                    name: "Name is required"
                }
            });
            return;
        }
        if (this.state.email === "") {
            this.setState({
                error: {
                    email: "Email is required"
                }
            });
            return;
        }
        if (this.state.phone === "") {
            this.setState({
                error: {
                    phone: "Email is required"
                }
            });
            return;
        }
        console.log(this.state, "state")
        const newContact = {
            name,
            email,
            phone
        }
        const data = await axios.post("https://jsonplaceholder.typicode.com/users", newContact);
        console.log(data.data, "data")
        dispatch({type: "ADD_CONTACT", payload: data.data})
        this.setState({name: "", phone: "", email: ""});

        this
            .props
            .history
            .push('/')
    }

    onChange = e => {
        console.log(e.target.value, "event");
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    render() {

        return <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div className="container">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h2>Add Contact</h2>
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={this
                                    .handleSubmit
                                    .bind(this, dispatch)}>
                                    <TextGroup
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        onChange={this.onChange}
                                        error={this.state.error.name}/>

                                    <TextGroup
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        onChange={this.onChange}
                                        error={this.state.error.email}/>

                                    <TextGroup
                                        type="text"
                                        name="phone"
                                        placeholder="phone"
                                        onChange={this.onChange}
                                        error={this.state.error.phone}/> {/* <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.onChange} className="form-control form-control-lb"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" name="email"  onChange={this.onChange} className="form-control form-control-lb"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone number</label>
                        <input type="text" name="phone" onChange={this.onChange} className="form-control form-control-lb"/>
                    </div> */}
                                    <div className="form-group">
                                        <input type="submit" value="Add" className="form-control btn-block"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    }
}

export default AddContact;
