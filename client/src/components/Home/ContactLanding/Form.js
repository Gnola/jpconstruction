import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Form extends Component {

  state = {
    name:'',
    email:'',
    phone:'',
    subject:'',
    inquiry:'',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === '') {
      this.setState({error:'Please include a valid email address'})
    } else {
      const { name, email, phone, subject, inquiry} = this.state
      console.log(name, email, phone, subject, inquiry);

      let templateParams = {
        name,
        email,
        phone,
        subject,
        inquiry
       }
       console.log(templateParams);

      emailjs.send('gmail', 'inquiry', templateParams, 'user_m4C35RBt84FZzFDpPhTSG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      this.props.sent()
      this.setState({
        name:'',
        email:'',
        phone:'',
        subject:'',
        inquiry:''
      })
    }
  }

  render() {
    return (
      <form id='form' className='ContactForm' onSubmit={this.handleSubmit}>
        <div className='ContactFormInfo'>
          <span><label>Name:</label> <input type='text' id='name' value={this.state.name} onChange={this.handleChange} /></span>
          <span><label>*Email:</label> <input type='email' id='email' placeholder='example@example.com' value={this.state.email} onChange={this.handleChange} /></span>
          <span><label>Phone:</label> <input type='phone' id='phone' placeholder='(555) 555-555' value={this.state.phone} onChange={this.handleChange} /></span>
        </div>
        <div className='ContactFormInquire'>
          <span><label>Subject:</label> <input type='text' id='subject' placeholder={this.props.subject} value={this.state.subject} onChange={this.handleChange} /></span>
          <label id='inquire-label'>Inquiry</label>
          <textarea type='text' id='inquiry' onChange={this.handleChange} value={this.state.inquiry} placeholder={`I would like to know more about your ${this.props.subject ? this.props.subject : 'services'}`}/>
          {this.state.error === '' ? null : <p id='error-message'>{this.state.error}</p>}
        </div>
        <div className='ContactFormButton'>
          <button className={this.state.email === '' ? 'disabled' : 'active'} >Send</button>
        </div>
      </form>
    );
  }
}

export default Form;
