import React from 'react'
import Header from '../components/Header';
import styles from './styles/Dashboard.module.css';
import { Link } from 'react-router-dom'

function Dashboard() {

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <Link to='/tasks' className={styles.tileView}>
                    <span className={styles.title}>Tasks</span>
                </Link>
                <Link to='/members' className={styles.tileView}>
                    <span className={styles.title}>Members</span>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;