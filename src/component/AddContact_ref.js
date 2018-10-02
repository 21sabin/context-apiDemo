import React, { Component } from 'react'

 class AddContact extends Component {
    constructor(props){
        super(props);
        this.nameRef=React.createRef();
        this.emailRef=React.createRef();
        this.phoneRef=React.createRef();
        console.log(this.nameRef,"nameRef")

    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.nameRef.current.value,"node")
    }

    onChange=e=>{
        console.log(e.target.value,"event");
      this.setState({[e.target.name]:e.target.value});
    }

    static defaultProps={
        name:"John doe",
        email:"johhn@gmail.com",
        phone:"7777-7777-77777"
    }

  render() {
      const { name,email,phone }=this.props;
    return (
      <div className="container">
          <div className="card mb-3">
            <div className="card-header">
                <h2>Add Contact</h2>
            </div>
            <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" defaultValue={name} ref={this.nameRef} onChange={this.onChange} className="form-control form-control-lb"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" name="email" defaultValue={email} ref={this.emailRef} onChange={this.onChange} className="form-control form-control-lb"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Phone number</label>
                        <input type="text" name="phone" defaultValue={phone} ref={this.phoneRef} onChange={this.onChange} className="form-control form-control-lb"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="form-control btn-block" />
                    </div>
                </form>
            </div>
          </div>
      </div>
    )
  }
}

export default AddContact;

