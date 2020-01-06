import React from 'react';
import { LoginPage, LoginWrap, SummitLogin } from './style';

const Login = () => {
  return (
    <LoginPage>
      <LoginWrap>
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="&#xf0e0; email "
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="&#xf084; password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <SummitLogin>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="/">password?</a>
            </p>
          </SummitLogin>
        </form>
      </LoginWrap>
    </LoginPage>
  );
};

export default Login;
