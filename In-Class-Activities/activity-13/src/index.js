/* 
    Logan Gosch
    lgosch@iastate.edu
    10/21/24
 */

import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import { UserCard } from './UserCard';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div>
        <UserCard
            picture=" https://freepngimg.com/thumb/mark_zuckerberg/70496-states-united-executive-world's-mark-zuckerberg-chief-thumb.png"
            name="Mark Zuckerberg"
            amount={3000}
            married={true}
            points={[100, 101.1, 202, 2]}
            address={{ street: "123 Bellmont Rd.", city: "Ames", state: "Iowa" }}
        />
        <UserCard
            picture="https://freepngimg.com/thumb/bill_gates/170351-gates-bill-face-hq-image-free.png"
            name="Bill Gates"
            amount={3500}
            married={true}
            points={[1, 2, 3, 4]}
            address={{ street: "5010 Av Some", city: "Tempe", state: "AZ" }}
        />
    </div>
);