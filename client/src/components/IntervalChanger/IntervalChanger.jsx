import { useState } from 'react';

// Підключаємо socket у разі зміни інтервала зміни застосуються і дані почнуть приходити з новим іннтервалом
import socket from '../../socket/socketSub';

import './IntervalChanger.scss';

export default function IntervalChanger() {
    const [newInterval, setNewInterval] = useState('');
    const [verify, setVerify] = useState('');

    const handleChange = (event) => {
        setNewInterval(event.target.value);
    };

    const handleSubmit = () => {
        switch (true) {
            case isNaN(parseFloat(newInterval)):
                setVerify('Дозволені тільки цифри');
                setNewInterval('');
                break;
            case newInterval > 99999:
                setVerify('Найбільше допустиме значення 99999 секунд');
                setNewInterval('');
                break;
            case newInterval < 1:
                setVerify('Найменше допустиме значення 1 секунда');
                setNewInterval('');
                break;
            default:
                socket.emit('changeInterval', parseInt(newInterval) * 1000);
                setNewInterval('');
                setVerify('');
                break;
        }
    };

    return (
        <div className='intervalChanger'>
            <div className="intervalChanger__container">
                <div className="intervalChanger__cover">
                    <div className="intervalChanger__input-cover">
                        <input className='intervalChanger__input' type="text" placeholder='int' value={newInterval} onChange={handleChange} /> сек
                    </div>
                    <button className='intervalChanger__button' type='button' onClick={handleSubmit}>Змінити інтервал</button>
                </div>
                <div className='intervalChanger__verify' data-testid='verify'>{verify}</div>
            </div>
        </div>
    );
}