import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { LoginPage, LoginWrap, SummitLogin, ErrorValidate } from './style';
import { LoginFirebase, checkStatusLogin } from '../../Store/Login/action';

const Login = props => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or less')
        .required('Required')
    }),
    onSubmit: values => {
      props.login(values);
    }
  });

  const po = () => {
    props.checkLogin();
  };

  return (
    <>
      <LoginPage>
        <LoginWrap>
          <form onSubmit={formik.handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="&#xf0e0; email "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <ErrorValidate>{formik.errors.email}</ErrorValidate>
              ) : null}
            </div>

            <div className="form-group">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="&#xf084; password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorValidate>{formik.errors.password}</ErrorValidate>
              ) : null}
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
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                    onClick={po}
                  >
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
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      return dispatch(LoginFirebase(user));
    },
    checkLogin: () => {
      return dispatch(checkStatusLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
