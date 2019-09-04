import React from 'react';

export const Input = ({ value, label, id, onChange }) => {
    return (
        <div className="input-group">
            {id && (
                <span id={id} aria-hidden>
                    {label}
                </span>
            )}
            <input
                type="text"
                value={value}
                aria-labelledby={id}
                aria-label={!id ? label : ''}
                onChange={onChange}
            />
            <style jsx>{`
                .input-group {
                    display: flex;
                    flex-direction: column;
                    margin: 5px 0;
                }

                span {
                    display: block;
                }

                input {
                    width: 100%;
                    border: none;
                    padding: 3px 5px;
                    font-size: 20px;
                    border-radius: 5px;
                }
            `}</style>
        </div>
    );
};
