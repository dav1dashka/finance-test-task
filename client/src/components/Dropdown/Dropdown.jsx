import React, { useState, useEffect, useRef } from 'react';

import './Dropdown.scss';

export default function Dropdown({ id, handleToggleProp, isEnabled, handleToggleWG, isAdded }) {
    const storedIsOpen = sessionStorage.getItem(`isOpen_${id}`) === 'true';
    const [isOpen, setIsOpen] = useState(storedIsOpen);
    const dropdownBtnRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        sessionStorage.setItem(`isOpen_${id}`, isOpen);
    }, [id, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownBtnRef.current && !dropdownBtnRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="dropdown">
                <button className="dropdown-toggle" data-testid='dropdown-toggle' ref={dropdownBtnRef} type='button' onClick={handleToggle}>+</button>
                {isOpen && (
                    <div className="dropdown-menu" data-testid='dropdown-menu'>
                        <button className="dropdown-item" data-testid='toggle-show' onClick={handleToggleProp}>
                            {!isEnabled ? 'Показати' : 'Сховати'}
                        </button>
                        <button className="dropdown-item" data-testid='toggle-add' type='button' onClick={handleToggleWG}>
                            {!isAdded ? 'Додати до групи' : 'Прибрати з групи'}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
