import React, {Component} from 'react'
import Contact from './Contact';
import {Consumer} from './../component/context';
class Contacts extends Component {
    constructor(props) {
        super(props)
    }

    deleteHandler(id){
        const { contacts } =this.state;
        const newContacts=contacts.filter(contact=>contact.id!==id);
        this.setState({contacts:newContacts})

    }
  
    render() {

        return(
            <Consumer >
                { value=>{
                    console.log(value,"value")
                    return (
                 <div className="container">
                   
                {value.contacts.map(contact => {
                         return <Contact
                            key={contact.id}
                            contact={contact}
                            deleteContact={this
                            .deleteHandler.bind(this,contact.id)
                            }/>
                    })
}
            </div>
                    )
                }}

            </Consumer>
        )
//         return (

//         )
    }
}

export default Contacts;
