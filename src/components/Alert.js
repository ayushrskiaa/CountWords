import React, { useState, useEffect } from 'react'


export default function Alert(props) {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (!showAlert) return null;

//
    return (
            // console.log("Delayed for 1 second.");
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Welcome to the <strong>CountYourWords</strong>
                <button type="button" className="btn-close btn-outline-primary" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
       
          

    )
}
