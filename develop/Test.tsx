import * as React from "react";
import Navi from "./MainPageCom/NavigatorBar";
import KOSbox from "./MainPageCom/StockChartBlock";
import StockReco from "./MainPageCom/StockReconmendBlock";


function Test() : JSX.Element {
    return (
        <>
        <div>
        <h1>Hello World!</h1>
        <p>테스트용 페이지입니다. 아래 숫자가 보이시나요?</p>
        <p>2023-06-07</p>
        </div>

        <div>
            <Navi />
            <KOSbox />
            <StockReco />
        </div>
        </>
    );
}
export default Test;