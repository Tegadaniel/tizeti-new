const Backdrop = ({ open, onClick }) =>
  open ? (
    <div
      className="fixed w-full h-full z-30 top-0 left-0 right-0 bg-black/50"
      onClick={onClick}
    ></div>
  ) : null;

export default Backdrop;
