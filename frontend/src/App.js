import React, { useState } from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteDisplay from './components/QuoteDisplay';
import Confirmation from './components/Confirmation';

const App = () => {
    const [quote, setQuote] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleQuoteFetched = (quote) => {
        setQuote(quote);
        setShowConfirmation(false);
    };

    const handleAcceptQuote = () => {
        setShowConfirmation(true);
    };

    return (
        <div>
            <h1>Bridge</h1>
            <QuoteForm onQuoteFetched={handleQuoteFetched} />
            {quote && !showConfirmation && (
                <QuoteDisplay quote={quote} onAcceptQuote={handleAcceptQuote} />
            )}
            {showConfirmation && <Confirmation quote={quote} />}
        </div>
    );
};

export default App;
