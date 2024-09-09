import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const targetRoute = location.pathname === '/customer' ? '/ecommerce' : '/customer';
  const displayText = location.pathname === '/customer' ? 'Customer' : 'Administrator';
  const displayText1 = location.pathname === '/customer' ? 'Ronav' : 'Karthik';
  const displayavatar = location.pathname === '/customer' ? 'https://images.unsplash.com/photo-1623212113495-101ed133641c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1549845375-ce0a0ba8288c?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={displayavatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">{displayText1}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{displayText}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> Account</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
      <Link to={targetRoute}>
      <Button
        color="white"
        bgColor={currentColor}
        text={location.pathname === '/customer' ? 'Logout' : 'Logout'}
        borderRadius="10px"
        width="full"
      />
    </Link>
      </div>
    </div>

  );
};

export default UserProfile;
