import React from 'react'


export default function Alert(props) {
    return (
      
            // console.log("Delayed for 1 second.");
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Welcome to the <strong>CountYourWords</strong>
                <button type="button" className="btn-close btn-outline-primary" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
       
          

    )
}
