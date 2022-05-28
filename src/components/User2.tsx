import React from 'react';

const User2 = (props: {name:string}) => {
    const name = props.name;
    return (
        <div>
            <h2>Hello From : {name}</h2>
        </div>
    );
};

export default User2;