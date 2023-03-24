import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
        setIsLoading(false);
    };

    return (
        <div className="App">
            <nav>
                <h1>Brand Name</h1>
                <button onClick={getUsers}>Get Users</button>
            </nav>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="user-card-grid">
                    {users.map((user) => (
                        <div key={user.id} className="user-card">
                            <img src={user.avatar} alt={user.first_name} />
                            <h3>
                                {user.first_name} {user.last_name}
                            </h3>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
