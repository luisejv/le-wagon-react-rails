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
                    <Link to="/list">Todo List</Link>
                </li>
                <li>
                    <NavLink exact="true" to="/" >Home</NavLink>
                </li>
            </ul>
            <h1>NavBar</h1>
        </nav>
    )
}

