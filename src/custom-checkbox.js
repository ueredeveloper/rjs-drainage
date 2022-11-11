import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));


export default CustomCheckbox;