import * as React from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import theme from '../../utils/theme';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header({
  deleteAllTodo,
  importantTodoCount,
  allTodo,
}) {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Смена темы">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <LightModeIcon />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Todo App
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск задачи…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Tooltip title="Срочные задачи">
              <IconButton
                disabled={!allTodo.some(todo => todo.isImportant)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 1 }}
              >
                <Badge badgeContent={importantTodoCount} color="secondary">
                  <SdCardAlertIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Удаление всех задач">
              <IconButton
                disabled={allTodo.length === 0 ? true : false}
                onClick={deleteAllTodo}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 1 }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
