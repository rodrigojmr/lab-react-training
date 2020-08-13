import React from 'react';
import './SignupPage.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'johndoe@gmail.com',
      password: '',
      nationality: 'undefined',
      validEmail: undefined,
    };
  }

  emailValidation = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    if (property === 'email') {
      this.setState({
        validEmail: this.emailValidation(value),
      });
    }
    this.setState({
      [property]: value,
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signup">
        <Form
          action=""
          className="signup-form"
          onSubmit={this.handleFormSubmission}
        >
          <FormGroup>
            <Label htmlFor="email-input">Email</Label>
            <Input
              name="email"
              type="email"
              id="email-input"
              value={this.state.email}
              onChange={this.handleInputChange}
              valid={this.state.validEmail}
              invalid={!this.state.validEmail}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password-input">password</Label>
            <Input
              name="password"
              type="password"
              id="password-input"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="nationality"
              id="nationality-input"
              value={this.state.nationality}
              onChange={this.handleInputChange}
            >
              <option value="" selected hidden></option>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </Input>
          </FormGroup>
          <Button color="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <div>
          <p>
            {this.state.nationality === 'en'
              ? 'Hello'
              : this.state.nationality === 'de'
              ? 'Hallo'
              : this.state.nationality === 'fr'
              ? 'Bonjour'
              : 'No nationality selected.'}
          </p>
          <p>Your e-mail is {this.state.email}</p>
        </div>
      </div>
    );
  }
}

export default SignupPage;
