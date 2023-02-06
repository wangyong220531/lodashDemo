import _ from 'lodash';
import React from 'react';
import "./App.css"

const App: React.FC = () => {
    const obj = [{
        name: "腕豪",
        age: 22
    }, {
        name: "亚索",
        age: 23
    }]

    const newObj = _.cloneDeep(obj)

    return <>
        <button onClick={() => { console.log(newObj[0] === obj[0]); }}>点击</button>
    </>
}

export default App