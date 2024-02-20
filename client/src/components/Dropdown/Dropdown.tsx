import { useState, useEffect, useRef } from 'react';

import './Dropdown.scss';

type DropDownType = {
    id: string,
    handleToggleProp: () => void,
    isEnabled: boolean,
    handleToggleWG: () => void,
    isAdded: boolean
}

export default function Dropdown({ id, handleToggleProp, isEnabled, handleToggleWG, isAdded }: DropDownType) {
    const storedIsOpen = sessionStorage.getItem(`isOpen_${id}`) === 'true';
    const [isOpen, setIsOpen] = useState<boolean>(storedIsOpen);
    const dropdownBtnRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        sessionStorage.setItem(`isOpen_${id}`, `${isOpen}`);
    }, [id, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLInputElement;

            if (dropdownBtnRef.current && !dropdownBtnRef.current.contains(target)) {
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
                        <button className="dropdown-item" data-testid='toggle-show' type='button' onClick={handleToggleProp}>
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