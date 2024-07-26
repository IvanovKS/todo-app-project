import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackbarAddTodo({ open, handleClose }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Создана новая задача!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackbarAddTodo;
