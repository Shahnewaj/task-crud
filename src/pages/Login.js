import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/features/userSlice';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!_.isEmpty(user)) {
            navigate('/')
        }
    }, [navigate, user])



    const onFinish = (values) => {
        dispatch(login(values));
        navigate('/dashboard')
    };

    const onFinishFailed = (errorInfo) => {
        alert('Invalid input')
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;