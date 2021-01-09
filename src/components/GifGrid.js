import React from 'react'
import { GifGrdItem } from './GifGrdItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGrdItem 
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
