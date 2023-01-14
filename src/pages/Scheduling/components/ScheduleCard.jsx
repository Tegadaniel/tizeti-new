import groupUser from '../../../assets/icons/user-group.svg';

const ScheduleCard = ({
  color: { backgroundColor, borderColor, slateColor },
}) => {
  
    

  return (
    <div
      className={`flex justify-between border ${borderColor} ${backgroundColor} rounded py-3 px-[17px] text-black-300 text-[10px]  mb-10 last-of-type:mb-0`}
    >
      <div className="flex gap-[11px]">
        <div className={`w-[5px] ${slateColor} h-full`}></div>
        <div className="flex flex-col">
          <span className="font-medium text-base mb-[9px]">
            3 Installations:
          </span>
          <span>Ikeja</span>
          <span>Magodo</span>
          <span>GRA</span>
        </div>
      </div>
      <div className="flex flex-col mr-[17px]">
        <span className="font-medium text-base mb-[9px]">Team A</span>
        <span>Timilehin and 2 others</span>
        <div className="mt-[5px]">
          <img src={groupUser} alt="Group user icon" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
