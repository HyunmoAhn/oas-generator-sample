import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import { PetApiFactory } from './generate/api';

const petApi = PetApiFactory();

const App = () => {

  useEffect(() => {
    (async () => {
      const { data } = await petApi.getPetById(12);

      console.log(data.id)
    })()

  }, []);

  return <div>Hello World2</div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)