
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import styles from './styles/Tasks.module.css'
import { Link, useNavigate } from 'react-router-dom'


const Members = () => {
    const { members } = useSelector(state => state.tasks);
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Link to="/create-member" className={styles.addTaskView}>
                    <span className={styles.buttonText}>+Add Member</span>
                </Link>
                <div className={styles.taskList}>
                    {members?.map((item, index) => (
                        <div onClick={() => navigate(`/edit-member/${item.id}`)} key={index} className={styles.taskItem}>
                            <h3>Name: {item?.name}</h3>
                            <p>Email: {item?.email}</p>
                            <p>Assigned Count: {item?.taskCount || 0}</p>
                            {!!item?.updatedAt && <p>Updated At : {new Date(item?.updatedAt).toDateString()}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Members