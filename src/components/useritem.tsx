import {FC} from 'react';
import {IUser} from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {

    return (
        <div key={user.id} style={{marginTop: '15px',padding: '15px', border: '2px solid black'}}>
        {user.id}.{user.name} проживает в {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem