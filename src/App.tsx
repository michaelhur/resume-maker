import './App.css';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

const userId = 'e050ef0a-007a-4268-9039-a7c147b9f207';

function App() {
    const [name, setName] = useState<string>('No data fetched yet');

    const getOneUser = () => {
        fetch(`/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                console.log(data);
            });
    };

    const getAllUser = () => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    const updateUser = () => {
        fetch(`/api/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Mike!',
            }),
        }).then((res) => res.json());
        // .then((data) => console.log(data));
    };

    const getEducation = () => {
        fetch(`/api/users/${userId}/education`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    const getBlogs = () => {
        fetch(`/api/users/${userId}/blogs`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    const deleteBlog = () => {
        const blogId = '2dd0a3d7-50f5-4d9a-a265-0f40670a2087';
        fetch(`/api/blogs/${blogId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <RecoilRoot>
            <div className="App">{name}</div>
            <div>
                <button onClick={getOneUser}>Get Name</button>
                <button onClick={getAllUser}>Check User list</button>
                <button onClick={updateUser}>Update user</button>
            </div>
            <div>
                <button onClick={getEducation}>get edu</button>
            </div>
            <div>
                <button onClick={getBlogs}>Get Blogs</button>
                <button onClick={deleteBlog}>Delete Blog</button>
            </div>
        </RecoilRoot>
    );
}

export default App;
