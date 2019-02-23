import React from 'react'
import Navigation from './Navigation';

export default ({ children }) => (
    <div>
        <Navigation />
        {children}
    </div>
)
