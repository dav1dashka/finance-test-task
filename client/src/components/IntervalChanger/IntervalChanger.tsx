import React, { useState, ChangeEvent } from 'react';
import socket from '../../socket/socketSub';

import './IntervalChanger.scss';

const IntervalChanger: React.FC = () => {
    const [newInterval, setNewInterval] = useState<string>('');
    const [verify, setVerify] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setNewInterval(event.target.value);
    };

    const handleSubmit = (): void => {
        switch (true) {
            case isNaN(parseFloat(newInterval)):
                setVerify('Дозволені тільки цифри');
                setNewInterval('');
                break;
            case Number(newInterval) > 99999:
                setVerify('Найбільше допустиме значення 99999 секунд');
                setNewInterval('');
                break;
            case Number(newInterval) < 1:
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
};

export default IntervalChanger;
