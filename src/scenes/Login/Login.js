import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MainDiv, H2 } from './LoginStyles';
import { Form, Input, Button, Checkbox } from 'antd';
import { getUser, setUser } from '../../redux/User/user.actions';
import { Link, useHistory } from 'react-router-dom';


function Login() {
  const history = useHistory();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = {
    username,
    password,
  }

  const getLocalData = () => {
    let userInfo = localStorage.getItem('user');
    console.log(user);
    if (user) {
      return JSON.parse(userInfo);
    } else return [];
  }


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [username])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [password])

  useEffect(() => {
    let userInfo = localStorage.getItem('user');
    console.log(user, "get");
  }, [])

  const onFinish = (values) => {
    const { username, password } = values;
    console.log(values);
    // setUserInfo()
    setUsername(username);
    setPassword(password);
    history.push("/select");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <MainDiv className="App">
      <H2>Quiz</H2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>

          <Button type="primary" htmlType="submit">
            Login
          </Button>

        </Form.Item>
      </Form>
    </MainDiv>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUser()),
    serUserInfo: () => dispatch(setUser()),
  };
}


  export default connect(mapStateToProps, mapDispatchToProps)(Login);
