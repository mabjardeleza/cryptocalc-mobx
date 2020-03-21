import React from 'react';
import Routing from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const App = () => (
    <div>
        <Helmet>
            <title>CryptoCalc</title>
            <meta name="description" content="A simple calculator for a portfolio of Cryptocurrency exchanges (Bitcoin, Litecoin and Ethereum), converting to a total in AUD" />
        </Helmet>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </div>
);

export default App;
