import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Payment from "./MyPayment";
import Summary from "./MySummary";

export default function App() {
    const [dataF, setDataF] = useState({});
    const [viewer, setViewer] = useState(0);

    return (
        <div>
            {(viewer === 0) ? <Payment dataF={dataF} setDataF={setDataF} setViewer={setViewer} viewer={viewer}/> : <Summary dataF={dataF} setDataF={setDataF} setViewer={setViewer} viewer={viewer}/>}
        </div>
    );
}