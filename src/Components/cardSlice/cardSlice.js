import Link from "next/link"
import Style from "./cardSlice.module.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';








function CardSlice() {	
    const [value, setValue] = React.useState(0);
    if (typeof window === 'object') {
        // Check if document is finally loaded
    

        }


        React.useEffect(() => {
            const slider = document.getElementsByClassName('MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-eg0mwd-MuiSlider-thumb'); 
            slider[0].addEventListener('click', (event) => {
               const value = event.target.style.left;
               const value2 = value.slice(0, -1);
               const result = 1000 * parseInt(value);
               setValue(result);
               
            
                

            });
            
             
        }, []);

   


    return (
        <div className={Style.container}>
            <div className={Style.intro}></div>
            <div className={Style.text}>
                <h1 className={Style.textTitle}>Qual o Valor?</h1>
                <h2 className={Style.textTitle} > {value} </h2>
                <Box sx={{ width: 300 }}>
                <Slider id='slider' defaultValue={50}  />
                </Box>
            </div>              
        </div >
    
         
            
    )
}

export default CardSlice
