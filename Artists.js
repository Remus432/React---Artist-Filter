import React from "react";

const Artists = ({singers}) => {
        return (
            <div className="singers">
                <ul>
                {
                    singers.map(singer => {
                        return <li key="2">{singer}</li>;
                    })
                }
                </ul>
            </div>
        )
        
    
}


export default Artists;