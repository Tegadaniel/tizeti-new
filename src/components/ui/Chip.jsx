const Chip = ({ className, label, onDelete }) => {
  return (
    <div
      className={`flex gap-4 justify-between items-center font-normal bg-[#E4E5E7] text-xs text-black px-2 py-[3px] rounded-[4px] whitespace-nowrap ${className}`}
    >
      <span>{label}</span>
      {onDelete && (
        <span className="cursor-pointer" onClick={onDelete}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99999 4.05732L8.29999 0.757324L9.24266 1.69999L5.94266 4.99999L9.24266 8.29999L8.29999 9.24266L4.99999 5.94266L1.69999 9.24266L0.757324 8.29999L4.05732 4.99999L0.757324 1.69999L1.69999 0.757324L4.99999 4.05732Z"
              fill="#DE3E1B"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default Chip;
