import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './routes/App.js';

const initialState = {
    "user":{},
    "myList":[],
    "postres": [
        {
          "id": 1,
          "name": "Flan",
          "price": "$130",
          "description": "Flan de vainilla"
        },
        {
            "id": 2,
            "name": "Gelatina",
            "price": "$150",
            "description": "Gelatina de fresa"
        },
        {
            "id": 3,
            "name": "Brownie",
            "price": "$230",
            "description": "Brownie de chocolate"
        }
    ],
    "bebidas": [
        {
          "id": 1,
          "name": "Agua",
          "price": "$100",
          "description": "Agua natural"
        },
        {
            "id": 2,
            "name": "Coca-Cola",
            "price": "$120",
            "description": "Refresco sabor cola"
        },
        {
            "id": 3,
            "name": "Cerveza",
            "price": "$150",
            "description": "Cerveza de barril"
        }
    ],
    "comidas": [
        {
          "id": 1,
          "name": "Picadillo",
          "price": "$200",
          "description": "Picadillo con arroz de guarnicion"
        },
        {
            "id": 2,
            "name": "Chuletas",
            "price": "$200",
            "description": "Chuletas con arroz de guarnicion"
        },
        {
            "id": 3,
            "name": "Cortadillo",
            "price": "$200",
            "description": "Cortadillo con arroz de guarnicion"
        }
    ]

}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('app'));

