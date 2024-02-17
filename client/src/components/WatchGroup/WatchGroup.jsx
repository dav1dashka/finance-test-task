import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setWgData } from '../../redux/reducers/wgSlice/wgSlice';
import Ticker from '../Ticker/Ticker';
import HeadTickers from '../HeadTickers/HeadTickers';
import getColor from '../../helpers/getColor';

export default function WatchGroup() {
    const currentData = useSelector((state) => state.tickers.currentData);
    const previousData = useSelector((state) => state.tickers.previousData);
    const isWGChanged = useSelector((state) => state.watchGroup.isChanged);

    const [filtredCurrData, setFiltredCurrData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const filtredData = currentData.filter((item) => {
            const savedState = localStorage.getItem(`tickerIsInWG_${item.ticker}`);
            return savedState === 'true';
        });

        setFiltredCurrData(filtredData);
        dispatch(setWgData(false));
    }, [currentData, dispatch, isWGChanged]);

    return (
        <>
            {filtredCurrData.length > 0
                ? <div className="tickers">
                    <div className="tickers__container">
                        <h2 className='tickers__title' data-testid='group-title'>Група перегляду</h2>
                        <div className="tickers__table">
                            <HeadTickers />
                            {filtredCurrData.map((item, index) => (
                                <Ticker
                                    key={`${index}-${item.price}-${item.dividend}`}
                                    info={item}
                                    color={getColor(item, previousData[index])}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}