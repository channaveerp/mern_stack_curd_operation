import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getData } from '../../redux/action';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log('id:', id);
  const [singleUserData, setSingleUserData] = useState(null);
  console.log('singleUserData:', singleUserData);

  const { usersData } = useSelector((state) => state.Reducer);
  // console.log('state:', usersData);

  useEffect(() => {
    const SingleData = usersData?.data?.find((user) => user._id === id);
    setSingleUserData(SingleData);
  }, [id]);

  return (
    <div className='m-4'>
      <h3>Welcome {singleUserData?.name}</h3>
      <Card sx={{ maxWidth: 700 }}>
        {/* <div
          style={{
            textAlign: 'right',
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end', 
          }}>
          <button className='btn btn-primary'>
            <CreateIcon />
          </button>
          <button className='btn btn-danger'>
            <DeleteOutlineIcon />
          </button>
        </div> */}
        <CardContent>
          <div className='row'>
            <div className='leftCont col-lg-6 col-md-6 col-12 p-3'>
              <div>
                <AccountCircleIcon style={{ fontSize: '40px' }} />
              </div>
              <p className='pro'>
                Name: <span>{singleUserData?.name}</span>
              </p>
              <p className='pro'>
                Age: <span>{singleUserData?.age}</span>
              </p>{' '}
              <p className='pro'>
                <MailIcon /> email: <span>{singleUserData?.email}</span>
              </p>{' '}
            </div>
            <div className='LeftCont col-lg-6 col-md-6 col-12 p-3'>
              <p className='mt-3 pro'>
                <WorkIcon /> Occupation: <span>{singleUserData?.work}</span>
              </p>
              <p className='pro'>
                <PhoneAndroidIcon /> Phone: <span>{singleUserData?.phone}</span>
              </p>{' '}
              <p className='pro'>
                <LocationOnIcon /> Location:{' '}
                <span>{singleUserData?.address}</span>
              </p>{' '}
              <p className='pro'>
                Description: <span>{singleUserData?.description}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
