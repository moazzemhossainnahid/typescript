import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: boolean
}

const Counter = () => {

    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] =useState<User | null>(null);
    const handleIncrease = ():void => {
        // setCounter("adam")
        setCounter(counter + 1)
    }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: "adam",
            job: true
        }
        setUser(userData)
    }

    const handleNameChange = (e: ChangeEvent<HTMLFormElement>):void => {

    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;