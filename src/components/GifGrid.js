import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loadig} = useFetchGifs(category);


    return (
        <>
        <h3>{category}</h3>
        {loadig && <p>Cargando</p>}
        <div className="card-grid">
                {
                    images.map(img => 
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                        />)
                    }
        </div>
        </>
    )
}
