import moment from "moment";
export default function truncateStr(str, n) {
  return str && str.length > n ? str.substr(0, n - 1) + "..." : str;
}
export const color = (status) => {
  switch (status) {
    case "queued":
      return "<div className='border border-1 broder-[#0680F1] bg-[#9BCFFF] rounded-md flex items-center text-center p-2 text-[#0680F1] h-[21.27px] w-[41px]'> text-[#0680F1] </div>";
    case "failed":
      return "<div className='border border-1 broder-[#DE3E1B] bg-[#FAE2DD] rounded-md flex items-center text-center p-2 text-[#DE3E1B] h-[21.27px] w-[41px]'>text-[#DE3E1B]</div>";
    case "completed":
      return "<div className='border border-1 broder-[#35AF67] bg-[#B7F9D2] rounded-md flex items-center text-center p-2 text-[#35AF67] h-[21.27px] w-[41px]'>text-[#35AF67]</div>";
    case "in progress":
      return "<div className='border border-1 broder-[#FFD163] bg-[#FEF8E8B2] rounded-md flex items-center text-center p-2 text-[#FFD163] h-[21.27px] w-[41px]'>text-[#FFD163]</div>";
    case "No LOS":
      return "<div className='border border-1 broder-[#000000] bg-[#F1F1F1] rounded-md flex items-center text-center p-2 text-[#000000] h-[21.27px] w-[41px]'>text-[#000000]</div>";
    case "confirmed":
      return "<div className='border border-1 broder-[#000000] bg-[#1CC7ED33] rounded-md flex items-center text-center p-2 text-[#1CC7ED] h-[21.27px] w-[41px]'>text-[#1CC7ED]</div>";
    case "awaiting":
      return "<div className='border border-1 broder-[#000000] bg-[#F7E8FD] rounded-md flex items-center text-center p-2 text-[#9747FF] h-[21.27px] w-[41px]'>text-[#9747FF]</div>";

    default:
      return "text-[#0680F1]";
  }
};

export const circularMark = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={color} />
    </svg>
  );
};

export const getDate = (date) => {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
};
