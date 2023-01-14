import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

const StyledPopover = styled(Popover)({
  '& .MuiPopover-paper': {
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
  },
});

const BasicPopover = ({
  id,
  open,
  onClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  anchorEl,
  children,
  ...rest
}) => {
  return (
    <StyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      {...rest}
    >
      {children}
    </StyledPopover>
  );
};

export default BasicPopover;
