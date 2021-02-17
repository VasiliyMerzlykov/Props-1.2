import React from 'react'

function Listing(props) {
    let {url, MainImage, title, currency_code, price, quantity} = props.items;
    return (
            <div className="item">
                <div className="item-image">
                    <a href={url}>
                        <img src={MainImage && MainImage.url_570xN} alt="" />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title && (title.length < 50 || title.slice(0, 50) + '...')}</p>
                    <p className="item-price">{currency_code === "USD" ? "$" : "€" }{price}</p>
                    <p className={quantity > 20 ? "item-quantity level-high" : quantity < 10 ? "item-quantity level-low" : "item-quantity level-medium" }>{quantity}</p>
                </div>
            </div>
    )
}

export default Listing


Listing.defaultProps = {
    items: [],
}