import React, { useEffect, useState } from 'react';
import { fetchTokens } from '../utils/api';

const TokenSelector = ({ onSelectToken }) => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        const getTokens = async () => {
            const data = await fetchTokens();
            setTokens(data.recommendedTokens);
        };
        getTokens();
    }, []);

    return (
        <select onChange={(e) => onSelectToken(e.target.value)}>
            <option value="">Select Token</option>
            {tokens.map((token) => (
                <option key={token.address} value={token.address}>
                    {token.name} ({token.symbol})
                </option>
            ))}
        </select>
    );
};

export default TokenSelector;
