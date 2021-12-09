import { styled } from '@material-ui/core/styles';
import { Toolbar as MuiToolbar } from '@material-ui/core';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;