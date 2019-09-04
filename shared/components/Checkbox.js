import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => (
    <>
        <div
            className={`checkbox${checked ? ' checked' : ''}`}
            role="checkbox"
            aria-checked={checked}
            aria-label={label}
            tabIndex="0"
            onKeyUp={onChange}
            onClick={onChange}
        />
        <style jsx>
            {`
                .checkbox {
                    width: 40px;
                    height: 40px;
                    background-color: red;
                    cursor: pointer;
                    margin: 15px;
                }
                .checkbox.checked {
                    background-color: green;
                }
            `}
        </style>
    </>
);
