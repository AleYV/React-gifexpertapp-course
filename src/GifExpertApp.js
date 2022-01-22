import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";
import React from 'react';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Tokyo Ghoul']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ul>

        </>
    )
}

