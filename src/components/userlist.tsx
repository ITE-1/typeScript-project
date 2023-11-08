import {FC} from 'react';
import { IUser } from '../types/types';
import UserItem from './useritem';

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => 
               <UserItem user={user}/>
            )}
        </div>
    )
}

export default UserList;