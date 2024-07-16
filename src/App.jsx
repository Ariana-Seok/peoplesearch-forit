import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/card';

function App() {
  const [data, setData] = useState(null);

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='App'>
        <h1 className='app_titulo'>PeopleSearch</h1>

        <div className="contenedor_cards">
          {data?.map((user) => (
            <Card
              key={user.id}
              nombre={user.name}
              usuario={user.username}
              email={user.email}
              ciudad={user.address.city}
              telefono={user.phone}
              nombreEmpresa={user.company.name}
              />
          ))}
        </div>
    </div>
  );
}

export default App;
