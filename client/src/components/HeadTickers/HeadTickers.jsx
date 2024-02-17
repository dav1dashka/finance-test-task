import './HeadTickers.scss';

export default function HeadTickers() {
    return (
        <>
            <div className="tickers__head head-tickers">
                <div className="head-tickers__item">Акція</div>
                {window.innerWidth > 930
                    ? <>
                        <div className="head-tickers__item head-tickers__exchange">Біржа</div>
                        <div className="head-tickers__item">Ціна</div>
                        <div className="head-tickers__item">Зміна</div>
                        <div className="head-tickers__item">% Зміни</div>
                        <div className="head-tickers__item">Дивіденд</div>
                        <div className="head-tickers__item">Дохідність</div>
                        <div className="head-tickers__item">Остання угода</div>
                    </>
                    : <>
                        <div className="head-tickers__item">Ціна / Зміна</div>
                        <div className="head-tickers__item">Див. / Дох.</div>
                    </>
                }
            </div>
        </>
    )
}