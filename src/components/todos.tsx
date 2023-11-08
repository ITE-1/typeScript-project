import {FC} from 'react';
import { ITodo } from '../types/types';


interface ToDoInterface {
    todo: ITodo[],
}

const ToDo: FC <ToDoInterface> = ({todo}) => {



    return (

        <>
            <ul>
               {todo.map(item => <li>
                {item.id}{item.title}
                <input type='checkbox'/>
               </li>)}
            </ul>
        </>
         
      
    )
}

export default ToDo;
