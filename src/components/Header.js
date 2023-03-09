import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/features/userSlice';
import styles from './Header.module.css'
import _ from 'lodash'

function Header() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const handleLogin = () => {

        navigate('/login')
    }

    return (
        <div className={styles.headerView}>
            <div className={styles.logoView}>
                <img alt="" className={styles.logo} src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png' />
                {!_.isEmpty(user) && <span>Logged in as <span className={styles.name}>{user.username}</span> </span>}
            </div>
            <div className={styles.menuView}>
                {!_.isEmpty(user) ? <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/tasks'>Tasks</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/members'>Members</Link>
                    </li>
                    <li onClick={handleLogout} className={styles.menuItem}>
                        <span className={styles.logoutButton}>Logout</span>
                    </li>
                </ul>
                    :
                    <ul className={styles.menuList}>

                        <li onClick={handleLogin} className={styles.menuItem}>
                            <span className={styles.logoutButton}>Sign In</span>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Header