import Form from './Form';

import { useState } from 'react';

function App() {
    const [input, setInput] = useState('');

    const getResult = (newInp) => setInput(newInp);

    return (
        <div className="grid grid-cols-1 grid-rows-2 gap-4 min-h-[100vh]">
            <div className="row-span-1 col-span-1 row-start-1 col-start-1 m-8 ">
                <Form getResult={getResult} />
            </div>

            <div className="row-span-1 col-span-1 row-start-2 col-start-1 | grid grid-cols-2 grid-rows-1 gap-4">
                <div className="row-span-1 col-span-1 row-start-1 col-start-1 m-8">
                    <h1>Hello World</h1>
                </div>
                
                <div className="row-span-1 col-span-1 row-start-1 col-start-2 m-8">
                    <h1>Hello World 2</h1>
                </div>
            </div>

        </div>

    )
}

export default App;