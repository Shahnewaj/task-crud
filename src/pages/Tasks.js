import React from 'react'
import Header from '../components/Header'
import styles from './styles/Tasks.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Tasks() {
    const { tasks } = useSelector(state => state.tasks);
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Link to="/create-task" className={styles.addTaskView}>
                    <span className={styles.buttonText}>+Add Task</span>
                </Link>
                <div className={styles.taskList}>
                    {tasks?.map((item, index) => (
                        <div onClick={() => navigate(`/edit-task/${item.taskId}`)} key={index} className={styles.taskItem}>
                            <p><strong>Title:</strong> {item?.title}</p>
                            <p><strong>Description:</strong> {item?.description}</p>
                            <p><strong>Assigned To:</strong>  {item?.member?.name}</p>
                            <p><strong>Created At:</strong>  {new Date(item?.createdAt).toDateString()}</p>
                            {!!item?.updatedAt && <p><strong>Updated At:</strong> {new Date(item?.updatedAt).toDateString()}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks