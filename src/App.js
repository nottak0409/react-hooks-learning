import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)

    const increment2 = () => setCount(previousCount => previousCount + 1);
    const decrement2 = () => setCount(previousCount => previousCount - 1);
    const reset = () => setCount(0);
    const double = () => setCount(previousCount => previousCount * 2);
    const divide3 = () => setCount(previousCount => {
            if(previousCount % 3 === 0) {
                return previousCount/3
            } else {
                return previousCount
            }
        }
    );

    return (
        <React.Fragment>
            <div>
                count: {count}
            </div>
            <button onClick={increment2}>+1</button>
            <button onClick={decrement2}>-1</button>
            <button onClick={double}>×2</button>
            <button onClick={divide3}>3の倍数の時だけ3で割る</button>
            <button onClick={reset}>reset</button>
        </React.Fragment>
    );
}

export default App;
