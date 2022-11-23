import React from 'react';
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside>
            <img src="images/logo.png" alt="" className={styles.logo} />
            <nav className={styles.nav}>
                <NavLink to="/">
                    <img src="images/dashboard-icon.png" alt="" className={styles.icon} />
                    Dashboard
                </NavLink>
                <NavLink to="/users">
                    <img src="images/users-icon.png" alt="" className={styles.icon} />
                    Users
                </NavLink>
                <NavLink to="/products">
                    <img src="images/products-icon.png" alt="" className={styles.icon} />
                    Products
                </NavLink>
            </nav>
            <div className={styles.settings}>
                <button>
                    <img src="images/logout-icon.png" alt="" className={styles.icon} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;