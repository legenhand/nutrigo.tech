import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Banner from "../Layouts/Banner";

export default function Example(props) {
    const items = [{
        title: "Covid 19",
        name: "Global Cases",
        component: "Banner",
        button: "More Info",
    },{
        title: "Covid 19",
        name: "Global Cases",
        component: "Banner",
        button: "More Info",
    }];

    return  (<Carousel>
        {items.map((item) =>
            <Banner title={item.title} name={item.name} button={item.button}/>
        )}
            </Carousel>
    );
}


