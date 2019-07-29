import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from "mobx-react";

let appState = observable({
    timer: 0,
    resetTimer: () => {}
});

appState.resetTimer = action(() => {
    appState.timer = 0
})
// define action
setInterval(
    action(() => {
        appState.timer += 1;
    }),
    1000
);
// create observer
let App = observer(({ appState: any }) => {
    return (
        <div className="App">
            <h1>Time passed
: {appState.timer}</h1>
            <button onClick={appState.resetTimer}>reset timer</button>
        </div>
    );
});
export default App