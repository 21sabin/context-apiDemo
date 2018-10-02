import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {header} = props;
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Contact Management</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/contact/add">
                            <span>
                                <i className="fas fa-question"></i>
                            </span>AddContact</Link>
                    </li>

                </ul>

            </div>
        </nav>

    )
}

Header.defaultProps = {
    header: "My App"
}
export default Header;