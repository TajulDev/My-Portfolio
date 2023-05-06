import React from 'react';
import './Nnn.css'

const LineProgress = ({percentage}) => {
        const [style, setStyle] = React.useState({});
        
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${percentage}%`
            }
            
            setStyle(newStyle);
        }, 200);
        
        return (
            <div className="progress">
                {/* <p>asdf</p> */}
                <div className="progress-done" style={style}>
                    {/* {percentage} */}
                </div>
            </div>
            
        )

};

export default LineProgress;