import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextGroup = ({type, name, placeholder, onChange, error}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={name}>{name}</label>
                <input
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={classnames('form-control form-control-lb', {'is-invalid': error})}/>
            </div>
            {error && <div class="alert alert-danger" role="alert">
                {error}
            </div>}

        </div>
    )
}

TextGroup.PropTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextGroup.defaultProps = {
    type: "text"
}

export default TextGroup;
