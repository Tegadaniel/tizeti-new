import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/tizeti.svg';
import back from '../../assets/icons/back.svg';
import { sidebarItems, nestedSidebarItems } from './items';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Item = ({ name, path, replace }) => {
  return (
    <NavLink
      end
      to={path}
      replace={replace}
      className={(link) =>
        `flex rounded-sm pb-4 ${
          link.isActive ? 'text-[#30BFAB]' : ' text-black-500'
        }`
      }
    >
      <div className=" flex gap-3 justify-between items-center">
        <span className="cursor-pointer font-semibold">{name}</span>
        {/*       
          <svg
            width="80"
            className="flex justify-end"
            height="2"
            viewBox="0 0 111 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.99707" y1="1" x2="110.997" y2="1" stroke="#08A6B3" />
          </svg> */}
      </div>
    </NavLink>
  );
};

function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathInitial = pathname.split('/').slice(0, 2).join('/');  

  const initialState = nestedSidebarItems(pathInitial) ? true : false;

  const [showNestedLinks] = useState(initialState);

  return (
    <div className="bg-gray-300 h-full pt-[14px] pl-[21px]">
      <img
        src={logo}
        height="100"
        width="100"
        className=" mb-8 cursor-pointer"
      />
      {!showNestedLinks ? (
        <p className=" text-xs text-gray-500">Tizeti Os</p>
      ) : (
        <div
          className="flex items-center gap-4 cursor-pointer select-none"
          onClick={() => navigate(-1)}
        >
          <img src={back} alt="" />
          <span>Main menu</span>
        </div>
      )}

      <div className=" mt-16">
        {!showNestedLinks ? (
          <>
            {sidebarItems.map((data, index) => {
              return <Item key={index + 1} path={data.path} name={data.name} />;
            })}
          </>
        ) : (
          <>
            <div className=" flex rounded-sm pb-9 font-bold text-2xl text-black-300 capitalize">
              {pathInitial.replace('/', '')}
            </div>
            {nestedSidebarItems(pathInitial).map((data, index) => {
              return (
                <Item
                  key={index + 1}
                  path={data.path}
                  name={data.name}
                  replace={true}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
