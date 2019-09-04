import React, { useState, useRef } from 'react';
import cn from 'classnames';

export const Dropdown = ({ values, selectedValue, label, setValue }) => {
    const dropdownRef = useRef();
    const selectedIndex = selectedValue ? values.indexOf(selectedValue) : 0;
    const [expanded, setExpanded] = useState(false);
    const [focus, setFocus] = useState(selectedIndex);
    const show = () => setExpanded(true);
    const hide = () => {
        setExpanded(false);
    };
    const handleKeyPress = e => {
        const { keyCode } = e;
        if (keyCode === 38) {
            setFocus(focus ? focus - 1 : values.length - 1);
            return;
        }
        if (keyCode === 40) {
            setFocus((focus + 1) % values.length);
            return;
        }
        if (keyCode === 13 || keyCode === 32) {
            if (expanded) {
                setValue(values[focus]);
                hide();
                dropdownRef.current.focus();
            } else {
                show();
            }
        }
    };

    const handleClick = e => setValue(e.target.dataset.item);

    return (
        <div
            className="dropdown"
            role="select"
            tabIndex="0"
            aria-labelledby="2"
            aria-activedescendant={expanded ? values[focus] : null}
            onClick={show}
            onKeyUp={handleKeyPress}
            onBlur={hide}
            ref={dropdownRef}
            aria-haspopup="listbox"
        >
            <div className="title">
                <span id="2">
                    {label}: {selectedValue || 'Nothing'} selected
                </span>
            </div>
            <div
                className={`list${!expanded ? ' hidden' : ''}`}
                aria-hidden={!expanded}
                role="listbox"
            >
                <ul>
                    {values.map((item, i) => (
                        <li
                            id={item}
                            key={item}
                            tabIndex={-1}
                            data-item={item}
                            role="option"
                            aria-selected={selectedValue === item}
                            className={cn({
                                selected: selectedValue === item,
                                hovered: values[focus] === item,
                            })}
                            onMouseDown={handleClick}
                        >
                            item {item}
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                .dropdown {
                    width: 350px;
                    border-radius: 5px;
                    background-color: white;
                }

                .title {
                    width: 100%;
                    padding: 10px;
                }

                .list {
                    border-top: 1px solid grey;
                }

                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }

                li {
                    padding: 5px 7px;
                }

                li.selected {
                    color: green;
                }

                li.hovered,
                li:hover {
                    background-color: black;
                    color: white;
                }

                .hidden {
                    display: none;
                }
            `}</style>
        </div>
    );
};
