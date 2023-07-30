import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteUser, getData } from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usersData } = useSelector((state) => state.Reducer);
  const { delteUsersData } = useSelector((state) => state.Reducer);
  console.log('delteUsersData:', delteUsersData);

  useEffect(() => {
    dispatch(getData(usersData));
  }, []);

  // useEffect(() => {
  //   dispatch(deleteUser(delteUsersData));
  // }, [delteUsersData]);

  const ViewUserDetailsHanlde = (id) => {
    navigate(`/view/${id}`);
  };
  const DeleteUserData = (id) => {
    if (id && window.confirm('Are you sure you want to delete data?')) {
      dispatch(deleteUser(id));
      dispatch(getData(usersData));
    }
  };

  const UpdateUserData = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='Addbtn mt-2'>
          <Link to='/register'>
            <button className='btn btn-primary'>Add-Users</button>
          </Link>
        </div>
        {/* table */}
        <table className='table mt-4'>
          <thead>
            <tr className='table-dark '>
              <th scope='col'>Id</th>
              <th scope='col'>UserName</th>
              <th scope='col'>Email</th>
              <th scope='col'>Job</th>
              <th scope='col'>Number</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {usersData?.data &&
              usersData?.data?.map((item) => (
                <tr>
                  <th scope='row'>...{item._id.slice(-8)}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.work}</td>
                  <td>{item.phone}</td>
                  <td className='d-flex justify-content-between g-2'>
                    {/* <Link to='/view/:1'>
                        <button className='btn btn-success'>
                          <RemoveRedEyeIcon />
                        </button>
                      </Link> */}
                    <button
                      className='btn btn-success'
                      onClick={() => ViewUserDetailsHanlde(item._id)}>
                      <RemoveRedEyeIcon />
                    </button>

                    <button
                      className='btn btn-primary'
                      onClick={() => UpdateUserData(item._id)}>
                      <CreateIcon />
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => DeleteUserData(item._id)}>
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
