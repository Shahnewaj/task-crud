import React, { useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Input, Row } from 'antd';
import styles from './styles/CreateTask.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateMember } from '../store/features/tasksSlice';
import _ from 'lodash';

function EditMember() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { members, tasks } = useSelector(state => state.tasks);
    const params = useParams();
    const [member, setMember] = useState(members.find(m => m.id === params.id))
    const [enableUpdate, setEnableUpdate] = useState(false);

    const assignedTasks = tasks.filter(task => task.memberId === params.id);


    const onFinish = () => {
        if (!member.name) {
            alert('Name is require')
        } else {
            const updatedMember = {
                ...member,
                updatedAt: Date.now(),
            };
            dispatch(updateMember(updatedMember));
            navigate('/members');
        }
    };


    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div>
                    <Card>
                        <p className={styles.label}><strong>Name:</strong> {member?.name} </p>
                        <p className={styles.label}><strong>Email:</strong> {member?.email} </p>
                        {!!member?.updatedAt && <p className={styles.label}><strong>Updated At:</strong> {member?.updatedAt} </p>}
                        <Button onClick={() => setEnableUpdate(!enableUpdate)} type="primary" >
                            {enableUpdate ? 'Cancel Edit' : 'Enable Edit'}
                        </Button>
                    </Card>
                </div>

                {enableUpdate && <div>
                    <Row>
                        <p>Name: </p>
                        <Input value={member?.name} onChange={e => setMember({ ...member, name: e.target.value })} placeholder="Enter name" />
                    </Row>
                    <Row>
                        <p>Email: </p>
                        <Input onChange={e => setMember({ ...member, email: e.target.value })} value={member?.email} placeholder="Enter email" />
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                        <Button onClick={onFinish} type="primary">
                            Update
                        </Button>
                    </Row>
                </div>}

                {!_.isEmpty(assignedTasks) && <div style={{ marginTop: 20 }}>
                    <h2>Assigned Task List</h2>
                    {assignedTasks?.map(item => (
                        <Card style={{ margin: 5 }}>
                            <p className={styles.label}><strong>Title:</strong> {item?.title} </p>
                            <p className={styles.label}><strong>Description:</strong> {item?.description} </p>
                        </Card>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default EditMember;