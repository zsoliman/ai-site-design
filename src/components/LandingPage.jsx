import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to Our Bar</h1>
            </header>

            <main>
                <section className="intro">
                    <h2>About Us</h2>
                    <p>
                        Enjoy a vibrant and lively atmosphere at our bar. We offer a wide
                        selection of drinks, delicious snacks, and a great place to socialize
                        with friends. Join us for a memorable experience!
                    </p>
                </section>

                <section className="specials">
                    <h2>Today's Specials</h2>
                    <ul>
                        <li>Happy Hour: 4 PM - 7 PM</li>
                        <li>Live Music: Every Friday night</li>
                        <li>Special Cocktails: Ask our bartenders</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Our Bar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
