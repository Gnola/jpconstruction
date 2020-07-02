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
      phone:'',
      subject:'',
      inquiry:''
    })
  }

  render() {
    return (
      <form id='form' className='ContactForm' onSubmit={this.handleSubmit}>
        <div className='ContactFormInfo'>
          <span><label>Name:</label> <input type='text' id='name' value={this.state.name} onChange={this.handleChange} /></span>
          <span><label>Email:</label> <input type='email' id='email' value={this.state.email} onChange={this.handleChange} /></span>
          <span><label>Phone:</label> <input type='phone' id='phone' value={this.state.phone} onChange={this.handleChange} /></span>
        </div>
        <div className='ContactFormInquire'>
          <span><label>Subject:</label> <input type='text' id='subject' value={this.state.subject} onChange={this.handleChange} /></span>
          <label id='inquire-label'>Inquiry</label>
          <textarea type='text' id='inquiry' onChange={this.handleChange} value={this.state.inquiry} placeholder='I would love to know more about your service...'/>
        </div>
        <div className='ContactFormButton'>
          <input type='submit' value='Send'></input>
        </div>
      </form>
    );
  }
}

export default Form;
