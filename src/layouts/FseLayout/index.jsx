import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar';
import MobileSideDrawer from '../Sidebar/MobileSideDrawer';
import hamburger from '../../assets/icons/menu-icon.svg';


function FseLayout() {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer);
  };
  return (
    <div className="grid md:grid-cols-12 min-h-screen h-full ">
      <div className="hidden md:block md:col-span-2">
        <Sidebar />
      </div>
      <MobileSideDrawer
        open={showSideDrawer}
        closed={sideDrawerToggleHandler}
      />
      <div className="md:hidden" onClick={sideDrawerToggleHandler}>
        <img src={hamburger} alt="Hamburger menu icon" />
      </div>
      <div className="col-span-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.8 }}
          className="bg-white px-8 md:p-8 mt-0 md:mt-8 md:pl-12 "
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}

export default FseLayout;
