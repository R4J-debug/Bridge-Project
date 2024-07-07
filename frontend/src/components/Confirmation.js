import React, { useEffect, useState } from 'react';
import { fetchParams } from '../utils/api';

const Confirmation = ({ quote }) => {
    const [params, setParams] = useState(null);

    useEffect(() => {
        const getParams = async () => {
            const data = await fetchParams(quote);
            setParams(data);
        };
        getParams();
    }, [quote]);

    return (
        <div>
            <h3>Transaction Parameters</h3>
            <p>{JSON.stringify(params)}</p>
        </div>
    );
};

export default Confirmation;
