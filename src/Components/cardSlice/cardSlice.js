import Link from "next/link"
import Style from "./cardSlice.module.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import { Button } from "../Topbar/styled";








function CardSlice() {	
    const [value, setValue] = React.useState(0);
    if (typeof window === 'object') {
        // Check if document is finally loaded
    

    }

        // React.useEffect(() => {
        //     const slider = document.getElementsByClassName('MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-eg0mwd-MuiSlider-thumb'); 
        //     slider[0].addEventListener('click', (event) => {
        //        const value = event.target.style.left;
        //        const value2 = value.slice(0, -1);
        //        const result = 2000 * parseInt(value);
        //        setValue(result);

        //     });
             
        // }, []);

   
        const valueSelect = (e)=>{
            const result = 2000 * parseInt(e.target.value);
            setValue(result);

        }

    return (
        <>
        <div className={Style.container}>
            <div className={Style.text}>
                <h1 className={Style.textTitle}>Qual o Valor?</h1>
                <h2 className={Style.textValue} > {value} </h2>
                <Box sx={{ width: "100%",padding:"15px 0 30px 0" }}>
                    <Slider onChange={(e)=>{valueSelect(e)}} id='slider' defaultValue={50}  />
                </Box>
                <button>Simule</button>
            </div>
        </div >

         </>
            
    )
}

export default CardSlice
