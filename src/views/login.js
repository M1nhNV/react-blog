import React from 'react'
import AuthLayout from "../layout/Auth";

class LoginPageView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <AuthLayout>
        <div>Login page</div>
      </AuthLayout>
    )
  }
}

export default LoginPageView
