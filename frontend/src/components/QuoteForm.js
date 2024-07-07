import React, { useState } from 'react';
import { fetchQuote } from '../utils/api';
import TokenSelector from './TokenSelector';

const QuoteForm = ({ onQuoteFetched }) => {
    const [token, setToken] = useState('');
    const [chain, setChain] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quote = await fetchQuote({ token, chain });
        onQuoteFetched(quote);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TokenSelector onSelectToken={setToken} />
            <input
                type="text"
                placeholder="Enter Chain ID"
                value={chain}
                onChange={(e) => setChain(e.target.value)}
            />
            <button type="submit">Get Quote</button>
        </form>
    );
};

export default QuoteForm;
