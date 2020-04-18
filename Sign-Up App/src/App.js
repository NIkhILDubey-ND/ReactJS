import './App.css';
import React, {Component} from 'react';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({formErrors, ...rest}) => {
  let valid = true;


  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });


  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {firstName: '', lastName: '', email: '', password: ''}
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = {...this.state.formErrors};

    switch (name) {
      case 'firstName':
        formErrors.firstName =
            value.length < 4 ? 'minimum 3 characaters required' : '';
        break;
      case 'lastName':
        formErrors.lastName =
            value.length < 4 ? 'minimum 3 characaters required' : '';
        break;
      case 'email':
        formErrors.email =
            emailRegex.test(value) ? '' : 'invalid email address';
        break;
      case 'password':
        formErrors.password =
            value.length < 8 ? 'minimum 8 characaters required' : '';
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state));
  };

  render() {
    const {formErrors} = this.state;

    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
    className = {formErrors.firstName.length > 0 ? 'error' : null} placeholder =
        'First Name'
    type = 'text'
    name = 'firstName'
    noValidate
                onChange={
      this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )
  }
  </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label><
      input
  className = {formErrors.lastName.length > 0? 'error': null} placeholder =
      'Last Name'
  type = 'text'
  name = 'lastName'
  noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )
}
</div>
            <div className="email">
              <label htmlFor="email">Email</label><
    input
className = {formErrors.email.length > 0 ? 'error' : null} placeholder = 'Email'
type = 'email'
name = 'email'
noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )
                }
                </div>
            <div className="password">
              <label htmlFor="password">Password</label><
                    input
                className = {
                    formErrors.password.length > 0 ? 'error' :
                                                     null} type = 'password'
                name = 'password'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )
                }
                </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
                    </div>
                <div className="or">OR</div>
                <div className="otheroptions"><small>Login Using</small></div>
            
           
            <div className="socialwebpage">
               <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" id="google"> Google </a>
               <a href="https://en-gb.facebook.com/login/" id="facebook">facebook</a>
               <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"id="linkdin">Linkedin</a> 
               <a href="https://twitter.com/login" id="twitter">Twitter</a></div></form>    
            
            </div></div>
    )
                }
                }

                export default App;