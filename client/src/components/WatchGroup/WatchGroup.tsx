import { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../redux/store';

import { setWgData } from '../../redux/reducers/wgSlice/wgSlice';
import Ticker from '../Ticker/Ticker';
import HeadTickers from '../HeadTickers/HeadTickers';
import getColor from '../../helpers/getColor';

import { DataType } from '../../helpers/types';

export default function WatchGroup() {
    const currentData = useAppSelector((state) => state.tickers.currentData);
    const previousData = useAppSelector((state) => state.tickers.previousData);
    const isWGChanged = useAppSelector((state) => state.watchGroup.isChanged);

    const [renderData, setRenderData] = useState<DataType[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const filtredData = currentData.filter((item: DataType) => {
            const savedState = localStorage.getItem(`tickerIsInWG_${item.ticker}`)!;
            return savedState === 'true';
        });

        setRenderData(filtredData);
        dispatch(setWgData(false));
    }, [currentData, dispatch, isWGChanged]);

    return (
        <>
            {renderData.length > 0
                ? <div className="tickers">
                    <div className="tickers__container">
                        <h2 className='tickers__title' data-testid='group-title'>Група перегляду</h2>
                        <div className="tickers__table">
                            <HeadTickers />
                            {renderData.map((item: DataType, index: number) => (
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