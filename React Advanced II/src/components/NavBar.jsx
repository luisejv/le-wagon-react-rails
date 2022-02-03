import React from 'react'
import { Link , NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <NavLink to="/list">Todo List</NavLink>
                </li>
            </ul>
            <h1>NavBar</h1>
        </nav>
    )
}

