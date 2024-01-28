import { useState, useEffect } from 'react';

//hp: current HP
//dif: newHP - current HP

function Stat({ statItem, value }) {
    const numParitions = 10;
    const imageBasePath = "/images/"; // Path relative to the public directory

    let imageName = statItem;
    let partitionValue = Math.floor(value / numParitions) * numParitions;

    imageName = imageBasePath + "bar" + "_" + partitionValue + ".png";

    console.log(imageName);

    let iconName = imageBasePath + statItem + "_icon.png";
    console.log(iconName)

    return (
        <div style={{paddingLeft: `2rem`, paddingTop: `1.25rem`}}>
            <h2 style={{
                fontFamily: `'PressStart2P', sans-serif`,
                fontSize: '20px',
                color: `#fff`,
                paddingBottom: `0.5rem`
            }}>{statItem}: {value}</h2>
            
            <div style={{display: `flex`}}>
                <img src={iconName} alt={`${statItem} icon`} 
                    style={{
                        height: '50px',
                        width: '50px',
                        objectFit: `contain`,
                        paddingRight: `0.25rem`
                    }}/>
                <img src={imageName} alt={`${statItem} stat bar`} 
                    style={{
                        height: 'auto',
                        width: '300px',
                        objectFit: `contain`
                    }}/>
            </div>

        </div>
    );
}


export default Stat;
