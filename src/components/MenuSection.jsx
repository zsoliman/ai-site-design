// MenuSection.js

import React from 'react';

function MenuSection() {
    const menuItems = [
        // Drinks
        { category: 'Drinks', name: 'Margarita', price: '$10.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Martini', price: '$12.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Old Fashioned', price: '$11.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Negroni', price: '$13.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Cosmopolitan', price: '$10.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Whiskey Sour', price: '$11.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Bloody Mary', price: '$9.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Pina Colada', price: '$12.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Mojito', price: '$11.99', image: 'https://via.placeholder.com/250' },
        { category: 'Drinks', name: 'Gin and Tonic', price: '$10.99', image: 'https://via.placeholder.com/250' },

        // Appetizers
        { category: 'Appetizers', name: 'Spinach Artichoke Dip', price: '$8.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Chicken Wings', price: '$9.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Bruschetta', price: '$7.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Loaded Potato Skins', price: '$10.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Nachos', price: '$8.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Shrimp Cocktail', price: '$12.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Garlic Knots', price: '$6.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Stuffed Mushrooms', price: '$9.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Cheese Quesadilla', price: '$7.99', image: 'https://via.placeholder.com/250' },
        { category: 'Appetizers', name: 'Caprese Salad', price: '$8.99', image: 'https://via.placeholder.com/250' },

        // Entrees
        { category: 'Entrees', name: 'Steak Frites', price: '$19.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Salmon Piccata', price: '$16.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Vegetarian Pasta Primavera', price: '$14.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'BBQ Pulled Pork Sandwich', price: '$12.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Classic Cheeseburger', price: '$11.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Chicken Alfredo', price: '$15.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Shrimp Scampi', price: '$17.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Lobster Ravioli', price: '$22.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Beef Tacos', price: '$10.99', image: 'https://via.placeholder.com/250' },
        { category: 'Entrees', name: 'Vegetarian Stir Fry', price: '$13.99', image: 'https://via.placeholder.com/250' },
    ];

    // Separate menu items by category
    const drinks = menuItems.filter(item => item.category === 'Drinks');
    const appetizers = menuItems.filter(item => item.category === 'Appetizers');
    const entrees = menuItems.filter(item => item.category === 'Entrees');

    return (
        <section className="menu">
            <h2>Menu</h2>

            <div className="menu-section">
                <h3>Drinks</h3>
                <div className="menu-items">
                    {drinks.map((item, index) => (
                        <div key={index} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-section">
                <h3>Appetizers</h3>
                <div className="menu-items">
                    {appetizers.map((item, index) => (
                        <div key={index} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-section">
                <h3>Entrees</h3>
                <div className="menu-items">
                    {entrees.map((item, index) => (
                        <div key={index} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
