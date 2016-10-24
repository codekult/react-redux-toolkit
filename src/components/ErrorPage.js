import React from 'react';

const ErrorPage = props => (
    <section>
        <h2>Error</h2>
        <p>{props.message}</p>
    </section>
);

export default ErrorPage;
