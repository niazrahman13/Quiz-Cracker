import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className=" navbar bg-fuchsia-50">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Quiz Cracker</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/statistics'}>Statistics</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;