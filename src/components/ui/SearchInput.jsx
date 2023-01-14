import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({
  type,
  placeholder,
  onSubmit,
  color = 'bg-primary-light-4',
}) => {
  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <div className="absolute top-1 left-3 pointer-events-none">
        <SearchIcon fontSize="small" color="#666666" />
      </div>
      <input
        type={type}
        className={`h-8 w-full pl-10 rounded-[4px] z-0 border border-gray-400 focus:ring-primary focus:ring-1 focus:outline-none placeholder:text-gray-500 placeholder:font-light placeholder:text-sm 4 ${color}`}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchInput;
