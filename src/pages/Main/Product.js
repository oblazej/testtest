import React from 'react';

export default function Product(props) {

    return (
        <div className={`bg-beige-light border-[#000] ${props.order % 2 === 1 ? 'border-r' : ''} border-b w-1/2`}>
            <img src={require('../../static/img/products/' + props.name + '.png')} />
        </div>
    );
}
