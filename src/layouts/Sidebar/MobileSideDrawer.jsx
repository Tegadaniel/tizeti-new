import ReactDOM from 'react-dom';
import Backdrop from '../../components/ui/Backdrop';

const SideDrawer = ({ open, closed }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop open={open} onClick={closed} />,
        document.getElementById('backdrop-root')
      )}
      <div
        className={`fixed w-[220px]  h-full top-0 left-0 right-0 bg-white px-5 py-8 z-50 shadow-small transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul>
          <li>Some</li>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
