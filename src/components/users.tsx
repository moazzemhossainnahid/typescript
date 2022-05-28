import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div>
            <h2>My Users</h2>
            <User name="Nahid" age={57}/>
        </div>
    );
};

export default Users;