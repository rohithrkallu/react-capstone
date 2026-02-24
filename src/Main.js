import React from 'react';
import hero from './hero.svg';

export default function Main() {
    return (
        <main id="main-content" className="page-main" role="main" aria-labelledby="main-heading" style={{padding: '2rem'}}>
            <section className="hero" aria-label="Introduction">
                <div className="hero-content">
                    <h1 id="main-heading">Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        A charming neighborhood bistro offering a curated selection of fresh, seasonal dishes.
                        Enjoy handcrafted meals and warm hospitality. Reserve a table to experience our specials.
                    </p>
                    <button className="btn-primary" aria-label="Reserve a Table">Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="Hero" />
                </div>
            </section>

            <section className="features" aria-label="Features" style={{marginTop: '1.5rem'}}>
                <h2>Specials</h2>
                <p>Check out this week's featured dishes and special offers.</p>
            </section>

        </main>
    );
}