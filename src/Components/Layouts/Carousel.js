import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ItemCarousel from "./ItemCarousel";



export default function Example(props)
{
    var items = {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    }

    return <Carousel>
        {
            <ItemCarousel item={items} />
        }
    </Carousel>
}

