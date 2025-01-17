import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { getProducts, createProduct, deleteProduct } from '../actions/product';
import { PRODUCT_CREATE_RESET } from '../actions/types';

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productList = useSelector((state) => state.productList);
  const { loading, products, pages, page, error } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: createLoading,
    success: createSuccess,
    error: createError,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: deleteLoading,
    success: deleteSuccess,
    error: deleteError,
  } = productDelete;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) history.push('/login');

    if (createSuccess)
      history.push(`/admin/product/${createdProduct._id}/edit`);
    else dispatch(getProducts('', pageNumber));
  }, [
    dispatch,
    history,
    userInfo,
    deleteSuccess,
    createSuccess,
    createdProduct,
    pageNumber,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };
  const deleteHandler = (id) => {
    if (window.confirm('are you sure?')) dispatch(deleteProduct(id));
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus' /> Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {(deleteLoading || createLoading) && <Loader />}
          {createSuccess && (
            <Message variant='success'>Product created!</Message>
          )}
          {deleteSuccess && (
            <Message variant='success'>Product deleted!</Message>
          )}
          {deleteError && <Message variant='danger'>{deleteError}</Message>}
          {createError && <Message variant='danger'>{createError}</Message>}

          <Table borderd hover striped responsive variant='dark' size='sm'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button size='sm' variant='light'>
                        <i className='fas fa-edit fa-lg' />
                      </Button>
                    </LinkContainer>
                    <Button
                      size='sm'
                      variant='danger'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash fa-lg' />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
