import { useEffect, useState } from 'react';
import { User } from '@typings/user';
import { fetcher } from '@src/apis';

const Profile = () => {
    const userId = 'e050ef0a-007a-4268-9039-a7c147b9f207';
    const [profileData, setProfileData] = useState<User | null>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            const response = await fetcher({ method: 'get', path: `/api/users/${userId}` });
            console.log(response);
            setProfileData(response);
        };
        fetchProfileData();
    }, [userId]);

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;
