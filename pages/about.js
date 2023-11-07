import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is our about page</p>
            <Link href="/">Go Back</Link>
        </div>
    );
}

export default About;