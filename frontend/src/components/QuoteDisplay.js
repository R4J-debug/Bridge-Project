import React from 'react';

const QuoteDisplay = ({ quote, onAcceptQuote }) => {
    return (
        <div>
            <h3>Quote</h3>
            <p>{JSON.stringify(quote)}</p>
            <button onClick={onAcceptQuote}>Bridge</button>
        </div>
    );
};

export default QuoteDisplay;
