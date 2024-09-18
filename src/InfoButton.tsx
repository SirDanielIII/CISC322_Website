import React from 'react'

function InfoButton() {  // Function to handle the button click and redirect based on the button text
    const handleClick = (event: { target: { innerText: string; }; }) => {
        const buttonText = event.target.innerText; // Get the text of the button

        if (buttonText === "Go to Google") {
            window.location.href = "https://www.google.com";
        } else if (buttonText === "Go to YouTube") {
            window.location.href = "https://www.youtube.com";
        }
        // Add more conditions as needed
    };

    return (
        <div>
            {/* Buttons with different text */}
            <button onClick={handleClick}>Go to Google</button>
            <button onClick={handleClick}>Go to YouTube</button>
        </div>
    );
}

export default InfoButton;