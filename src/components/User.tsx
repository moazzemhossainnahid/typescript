import React, { FC } from 'react';

interface Props{
    name:string,
    age:number
}

const User:FC<{name: string, age:number}> = (props) => {
    const age = props.age;
    return (
        <div>
            <h3>Hello from: {props.name} With Experience {age}</h3>
        </div>
    );
};

export default User;