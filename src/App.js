import React, { useState, useEffect } from 'react';

const App = props => {

    const [state, setState] = useState(props);
    const reset = () => { setState(props); }
    const { name, price } =state

    useEffect(() => {
        console.log("This is like ComponentDidMount or Componendidupdate");
    });

    useEffect(() => {
        console.log("This is like ComponentDidMount");
    }, []);

    useEffect(() => {
        console.log("This callback is for name only");
    }, [name]);

    return (
        <React.Fragment>
            <p>現在の{name}は{price}円です</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price + -1})}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
        </React.Fragment>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
