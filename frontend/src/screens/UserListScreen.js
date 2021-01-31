import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserList } from '../actions/user';
const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) dispatch(getUserList());
    else history.push('/login');
  }, [dispatch, history]);

  const deleteHandler = (id) => {
    console.log('delete');
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table borderd hover striped responsive variant='dark' size='sm'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  <a href={`mailto:${user.email}`}></a> {user.email}
                </td>
                <td>
                  {user.isAdmin ? (
                    <i
                      className='fas fa-check fa-lg'
                      style={{ color: 'green' }}
                    ></i>
                  ) : (
                    <i
                      className='fas fa-times fa-lg'
                      style={{ color: 'red' }}
                    ></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/users/${user._id}/edit`}>
                    <Button size='sm' variant='light'>
                      <i className='fas fa-edit fa-lg' />
                    </Button>
                  </LinkContainer>
                  <Button
                    size='sm'
                    variant='danger'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash fa-lg' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
