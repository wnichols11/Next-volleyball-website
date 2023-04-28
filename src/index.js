import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/*const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);


