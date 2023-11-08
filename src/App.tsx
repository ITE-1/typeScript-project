import { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/card';
import UserList from './components/userlist';
import { IUser, ITodo } from './types/types';
import axios from 'axios';
import ToDo from './components/todos';

const App = () => {
 
const [data, setData] = useState<IUser[]>([]);
const [todo, setTodo] = useState<ITodo[]>([]);

useEffect(() => {
  FetchData()
  FetchTodos()
}, [])

async function FetchData() {

  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setData(response.data)
  } catch (e) {
   console.log(e, 'error')
  }
  
} 
async function FetchTodos() {

  try {
    const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    setTodo(response.data)
  } catch (e) {
   console.log(e, 'error')
  }
  
} 
  return (
    <div className="App">
     <Card onClick={(num: number) => console.log('работает', num)} variant={CardVariant.outlined} width='280px' height='280px' >
        <button>Кнопка</button>
     </Card>
     <UserList users={data} />
     <ToDo todo={todo} />
    </div>
  );
}

export default App;
