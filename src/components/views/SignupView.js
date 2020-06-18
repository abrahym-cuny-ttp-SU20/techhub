import React from "react";

const SignupView = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div className="name">
          <input name="firstName" type="text" placeholder="First Name" value={props.firstName} onChange={props.handleChange}/>
          <input name="lastName" type="text" placeholder="Last Name" value={props.lastName} onChange={props.handleChange}/>
        </div>
        <div className="email">
          <input name="email" type="email" placeholder="Email Address" value={props.email} onChange={props.handleChange}/>
        </div>
        <div className="password">
          <input name="password" type="password" placeholder="Password" value={props.password} onChange={props.handleChange}/>
        </div>
        <div className="password-confirmation">
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            value={props.passwordConfirmation}
            onChange={props.handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
  );
};
export default SignupView;
