import React from 'react';
import { render } from 'react-dom'
// estou importando a função render de dentro do react-dom
import { App } from './app';

render(<App/>, document.getElementById("root"))
//o render recebe dois parametros um é o que vai ser rederizado e o outro é a onde vai ser rederizado.


//npm install --save-dev @babel/cli @babel/core @babel/plugin-transform-react-jsx
//npx babel App.js --out-file dist/App.js --plugins=@babel/plugin-transform-react-jsx