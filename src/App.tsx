import _ from 'lodash';
import React from 'react';
import "./App.css"

const App: React.FC = () => {
    const obj = {
        name: "腕豪",
        age: 22
    }

    const newObj = _.cloneDeep(obj)

    return <>
        <button onClick={() => { console.log(newObj); }}>点击</button>
    </>
}

export default App