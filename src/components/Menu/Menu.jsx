import React from 'react';
import foods from '../../fooddb';
import drinks from '../../drinksdb';

export default function Menu() {
console.log(drinks)
    return(
        <div className="menu">
            <h3>Menu</h3>
            <div className="menu-content">
                {foods.map(food => {
                const {name, price, image, descreption} = food;
                return (
                    <div className="menu-items">
                        <img src={image} alt={name} className="menu-item-image" />
                        <h5 className="menu-item-name">{name}</h5>
                        <p className="menu-item-price">{price}</p>
                        <p className="menu-item-descreption">{descreption}</p>
                    </div>
                )
            })}
            </div>
            
            {/* map through food, add cart buutons, and animations */}
            <div>
                {/* today's special */}
                {/* <h3>To day's special {food.name}</h3> */}
            </div>
            <div className="menu-content">
                {drinks.map(drink => {
                const {name, price, image, descreption} = drink;
                return (
                    <div className="menu-items">
                        <img src={image} alt={name} className="menu-item-image" />
                        <h4 className="menu-item-name">{name}</h4>
                        <p className="menu-item-price">{price}</p>
                        <p className="menu-item-descreption">{descreption}</p>
                    </div>
                )
            })}
            </div>
            
            
        </div>
    )
}