import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    console.log(state, action, "reducer");
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                contacts: state
                    .contacts
                    .filter(contact => contact.id !== action.payload)
            }
            break;
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [
                    action.payload, ...state.contacts
                ]
            }
    }

}
export class Provider extends Component {

    async componentDidMount(){
        const contacts=await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({contacts:contacts.data})
    }
    state = {

        contacts: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    render() {
        return (

            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export const Consumer = Context.Consumer;
