import React, { Component } from 'react';
// import emailjs from 'emailjs-com';

class Form extends Component {

  state = {
    name:'',
    email:'',
    subject:'',
    inquiry:''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name:'',
      email:'',
      subject:'',
      inquiry:''
    })
  }

  render() {
    return (
      <div>
        <form className='ContactForm' onSubmit={this.handleSubmit}>
          <div className='ContactFormInfo'>
            <label>Name</label> <input type='text' id='name' value={this.state.name} onChange={this.handleChange} />
            <label>Email</label> <input type='email' id='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className='ContactFormInquire'>
            <label>Subject</label> <input type='text' id='subject' value={this.state.subject} onChange={this.handleChange} />
            <label>Inquire</label>
            <textarea type='text' id='inquiry' onChange={this.handleChange} value={this.state.inquiry} placeholder='I would love to know more about your service...'/>
          </div>
          <div className='ContactFormButton'>
            <input type='submit' value='Send'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
