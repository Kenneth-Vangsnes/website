import React from "react";

export default function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Golden House</h1>
            <h2>Chinese Food</h2>
            <h2>Take Away</h2>
            <p>We are located in Heigreveien</p>
            <p>Foren 2, across Helgø/Meny at Stangeland/Sandved</p>
            <iframe 
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.1121653898043!2d5.7154060132045315!3d58.846732770120845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a364eadf22bdb%3A0xf41b89894a44dbc0!2sGolden%20House!5e1!3m2!1sno!2sno!4v1674815389718!5m2!1sno!2sno" 
                width="400" 
                height="250" 
                style={{"border":0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <br></br>
            <h2>Opening Hours:</h2>
            <ul>
                <li>Monday: Closed</li>
                <li>Tue-Sat: 15:00 - 22:30</li>
                <li>Sunday: 13:30 - 22:00</li>
            </ul>

            <p>Phone: 51 62 25 29</p>
        </div>
    )
}