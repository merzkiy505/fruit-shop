import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';


const ProductsCard = (props) => {

    const { img, rating, title, price } = props;

    const { addItem } = useContext(cartContext);

    const [isAdded, setIsAdded] = useState(false);


    const handleAddToCart = () => {

        // передаем на прямую пропс как есть, если нужен доступ к тому же значению в дочернем элементе
        const item = { ...props };
        addItem(item);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);

    };


    return (
        <>
            <div className="product_card">
                <figure className='flex justify-center '>
                    <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h3 className="price">₽ {price.toLocaleString()}</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Добавлено' : 'Добавить в корзину'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;