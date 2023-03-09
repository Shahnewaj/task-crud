import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Input, Row, } from 'antd';
import styles from './styles/CreateTask.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../store/features/tasksSlice';

function EditTask() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tasks } = useSelector(state => state.tasks);
    const [task, setTask] = useState(tasks.find(task => task.taskId === params.id));
    const [enableUpdate, setEnableUpdate] = useState(false);


    const onFinish = () => {
        if (!task.title) {
            alert('Title is require')
        } else {
            const updatedTask = {
                ...task,
                updatedAt: Date.now(),
            };
            dispatch(updateTask(updatedTask));
            navigate('/tasks');
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div>
                    <Card>
                        <p className={styles.label}><strong>Title:</strong> {task?.title} </p>
                        <p className={styles.label}><strong>Description:</strong> {task?.description || 'N/A'} </p>
                        <p className={styles.label}><strong>Assigned To:</strong> {task?.member?.name || 'N/A'} </p>
                        {!!task?.updatedAt && <p className={styles.label}><strong>Updated At:</strong> {task?.updatedAt} </p>}
                        <Button onClick={() => setEnableUpdate(!enableUpdate)} type="primary" >
                            {enableUpdate ? 'Cancel Edit' : 'Enable Edit'}
                        </Button>
                    </Card>
                </div>
                {enableUpdate && <div>
                    <Row>
                        <p className={styles.label}>Title: </p>
                        <Input value={task?.title} onChange={e => setTask({ ...task, title: e.target.value })} name="na" placeholder="Enter Title" />
                    </Row>
                    <Row>
                        <p>Description: </p>
                        <Input onChange={e => setTask({ ...task, description: e.target.value })} value={task?.description} placeholder="Enter Title" />
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                        <Button onClick={onFinish} type="primary" >
                            Update
                        </Button>
                    </Row>
                </div>}
            </div>
        </div >
    )
}

export default EditTask;