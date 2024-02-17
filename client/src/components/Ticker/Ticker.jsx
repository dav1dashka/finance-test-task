import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setWgData } from '../../redux/reducers/wgSlice/wgSlice';
import Dropdown from '../Dropdown/Dropdown';

import './Ticker.scss';

export default function Ticker({ info, color }) {
    // Отримуємо значення з localStorage, щоб користувач бачив зміни навіть на повторному користуванні застосунком
    const [isEnabled, setIsEnabled] = useState(() => {
        const savedState = localStorage.getItem(`tickerIsEnabled_${info.ticker}`);
        return savedState ? JSON.parse(savedState) : true;
    });

    const [isAdded, setIsAdded] = useState(() => {
        const savedState = localStorage.getItem(`tickerIsInWG_${info.ticker}`);
        return savedState ? JSON.parse(savedState) : false;
    });

    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
    };

    const handleToggleWG = () => {
        setIsAdded(!isAdded);

        // Змінюємо значення на true, щоб активувати функцію рендерингу компонентів у компонеті WatchGroup.jsx 
        dispatch(setWgData(true));
    };

    // Записуємо у localStorage значення, щоб користувач бачив зміни навіть на повторному користуванні застосунком
    useEffect(() => {
        localStorage.setItem(`tickerIsEnabled_${info.ticker}`, JSON.stringify(isEnabled));
    }, [info.ticker, isEnabled]);

    useEffect(() => {
        localStorage.setItem(`tickerIsInWG_${info.ticker}`, JSON.stringify(isAdded));
    }, [info.ticker, isAdded]);

    return (
        <>
            <div className='ticker'>
                <div className="ticker__container">
                    <div className='ticker__items'>
                        <div className='ticker__title'><span>{info.ticker}</span></div>
                        {isEnabled && (
                            <>
                                {window.innerWidth > 930
                                    ? <>
                                        <div className="ticker__item ticker__exchange"><span data-testid='ticker-exchange-932'>{info.exchange}</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-price-932'>{info.price}</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-change-932' style={{ color: color }}>{info.change}</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-change_percent-932' style={{ color: color }}>{info.change_percent}%</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-dividend-932' style={{ color: color }}>{info.dividend}</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-yield-932' style={{ color: color }}>{info.yield}</span></div>
                                        <div className="ticker__item"><span data-testid='ticker-last_trade_time-932'>{/T(\d{2}:\d{2}:\d{2})/.exec(info.last_trade_time)[1]}</span></div>
                                    </>
                                    : <>
                                        {/* Рендеримо html з мінімальною інформацією для користувача, щоб усе влізло в екран */}
                                        <div className="ticker__item">
                                            <div><span data-testid='ticker-price-928'>{info.price}</span></div>
                                            <div className="ticker__item ticker__sub-item">
                                                <span data-testid='ticker-change-928' style={{ color: color }}>{info.change} </span>
                                                <span data-testid='ticker-change_percent-928' style={{ color: color }}>({info.change_percent}%)</span>
                                            </div>
                                        </div>
                                        <div className="ticker__item">
                                            <span data-testid='ticker-dividend-928' style={{ color: color }}>{info.dividend}</span> /
                                            <span data-testid='ticker-yield-928' style={{ color: color }}> {info.yield}</span>
                                        </div>
                                    </>
                                }
                            </>
                        )}
                    </div>
                    <Dropdown
                        id={info.ticker}
                        handleToggleProp={handleToggle}
                        isEnabled={isEnabled}
                        handleToggleWG={handleToggleWG}
                        isAdded={isAdded}
                    />
                </div>
            </div>
        </>
    );
}
