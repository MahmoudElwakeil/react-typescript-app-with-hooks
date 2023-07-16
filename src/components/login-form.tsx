import * as React from "react";
import { NavLink } from "react-router-dom";
import AccountViewModel from "../models/account-view-model";
import InputField from "./inputField.component";

export interface LoginFormProps {}

export interface LoginFormState {
  account: AccountViewModel;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  state = {
    account: new AccountViewModel(),
    errors: {},
  };

  handleUserNameChange = (event: any) => {
    const account = { ...this.state.account };
    account.userName = event.currentTarget.value;
    this.setState({ account });
  };

  handleUserNameChanges2 = (event: any) => {
    const account = { ...this.state.account };
    account.userName = event.currentTarget.value;
    this.setState({ account });
  };

  handlePasswordChange = (event: any) => {
    const account = { ...this.state.account };
    account.password = event.currentTarget.value;
    this.setState({ account });
  };

  submitForm = (event: any) => {
    event.preventDefault();
    // const errors = this.validate();
    // this.setState({ errors });
    // if (errors) return;
  };

  // validate(): {} {
  //     throw new Error('Method not implemented.');
  // }

  render() {
    let account = this.state.account;
    return (
      <React.Fragment>
        <h3>
          Login or <NavLink to="/register">Register</NavLink>{" "}
        </h3>
        <form onSubmit={this.submitForm}>
          <InputField
            name="userName"
            value={account.userName}
            label="User Name"
            type="email"
            onChange={this.handleUserNameChange}
          />

          <InputField
            name="password"
            value={account.password}
            label="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
