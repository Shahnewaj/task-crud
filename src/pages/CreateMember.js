import React from 'react'
import Header from '../components/Header'
import { Button, Form, Input, Space } from 'antd';
import styles from './styles/CreateTask.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addMember } from '../store/features/tasksSlice';
import shortUUID from 'short-uuid';

function CreateMember() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onFinish = (values) => {
        const member = {
            ...values,
            id: shortUUID.generate()
        }
        dispatch(addMember(member));
        navigate('/members')
    };

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Form
                    name="complex-form"
                    onFinish={onFinish}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                >
                    <Form.Item label="Member Name">
                        <Space>
                            <Form.Item
                                name="name"
                                noStyle
                                rules={[{ required: true, message: 'Username is required' }]}
                            >
                                <Input placeholder="Enter name" />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Member Email">
                        <Space>
                            <Form.Item
                                name="email"
                                noStyle
                            >
                                <Input placeholder="Enter email" />
                            </Form.Item>
                        </Space>
                    </Form.Item>


                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            Add member
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CreateMember