import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { getTopProducts } from '../actions/product';

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, products, error } = productTopRated;

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
