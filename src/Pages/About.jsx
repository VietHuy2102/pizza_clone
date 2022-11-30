import React from "react";
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

export default function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizza})` }}
            >
               
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione odio quam, molestiae ipsam minus magnam et vitae!
                    Non, sapiente assumenda animi quas cupiditate, voluptatibus
                    totam quaerat nam impedit, laborum illo?
                </p>
            </div>
        </div>
    );
}
