import React, { PureComponent } from 'react';
import { Form, connectField, connectSubmit } from 'onion-form';
import Button from '../components/Button';
import TextField from '../components/TextField';

// Validation
const isRequired = value => (value && value.length > 0 ? null : 'is required');

// Fields definition
const Email = connectField('email', { label: 'E-mail' }, [isRequired])(TextField);
const Password = connectField('password', { label: 'Your Password', type: 'password' }, [isRequired])(TextField);

// Passing required props from connectSubmit to custom View Component
const Submit = connectSubmit(Button);

export default class LoginForm extends PureComponent {

  render() {
    return (
      <div>
        <Form name="loginForm" onSubmit={values => console.log(values)}>
          <Email />
          <Password />
          <Submit kind="secondary">Sign In</Submit>
        </Form>
      </div>
    );
  }
}
