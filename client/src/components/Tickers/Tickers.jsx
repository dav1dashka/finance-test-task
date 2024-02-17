import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setWgData } from '../../redux/reducers/wgSlice/wgSlice';
import IntervalChanger from '../IntervalChanger/IntervalChanger';
import Ticker from '../Ticker/Ticker';
import HeadTickers from '../HeadTickers/HeadTickers';
import getColor from '../../helpers/getColor';

import './Tickers.scss'

export default function Tickers() {
    const currentData = useSelector((state) => state.tickers.currentData);
    const previousData = useSelector((state) => state.tickers.previousData);
    const isWGChanged = useSelector((state) => state.watchGroup.isChanged);
    const [renderData, setRenderData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const filtredData = currentData.filter((item) => {
            const savedState = localStorage.getItem(`tickerIsInWG_${item.ticker}`);
            return savedState !== 'true';
        });

        setRenderData(filtredData);
        dispatch(setWgData(false));
    }, [currentData, dispatch, isWGChanged, previousData]);

    return (
        <>
            <div className="tickers">
                <div className="tickers__container">
                    {renderData.length > 0
                        ? <div className="tickers__cover">
                            <h2 className='tickers__title'>Вас це може зацікавити</h2>
                            <div className="tickers__table">
                                <HeadTickers />
                                {renderData.map((item, index) => (
                                    <Ticker
                                        key={`${index}-${item.price}-${item.dividend}`}
                                        info={item}
                                        color={getColor(item, previousData[index])}
                                    />
                                ))}
                            </div>
                        </div>
                        : null}
                    <IntervalChanger />
                </div>
            </div>

        </>
    )
}