import React from 'react'
import Header from '../components/Header'
import { Button, Form, Input, Select, Space } from 'antd';
import styles from './styles/CreateTask.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/features/tasksSlice';
import shortUUID from 'short-uuid';

function CreateTask() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { members } = useSelector(state => state.tasks);
    const { Option } = Select;

    const onFinish = (values) => {
        const taskId = shortUUID.generate();
        const memberId = values?.memberId || ''
        const task = {
            title: values.title || '',
            description: values.description || '',
            createdAt: Date.now(),
            memberId,
            taskId
        }
        dispatch(addTask(task));
        navigate('/tasks');
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
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Task Title">
                        <Space>
                            <Form.Item
                                name="title"
                                noStyle
                                rules={[{ required: true, message: 'Username is required' }]}
                            >
                                <Input placeholder="Enter input" />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Task Description">
                        <Space>
                            <Form.Item
                                name="description"
                                noStyle
                            >
                                <Input placeholder="Enter description" />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Assign Member">
                        <Input.Group >
                            <Form.Item name='memberId' noStyle >
                                <Select placeholder="Assign member">
                                    {members?.map((item, index) => (
                                        <Option key={index} value={item?.id}>{item?.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <span style={{ margin: 5 }}>Or</span>
                            <Link to="/create-member">
                                <span className={styles.addMember}>+ Add New Member</span>
                            </Link>
                        </Input.Group>
                    </Form.Item>

                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            Add Task
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CreateTask