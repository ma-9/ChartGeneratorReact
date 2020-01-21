import React, { Component, Fragment } from 'react';
import {
  Box,
  Typography,
  TextField,
  Snackbar,
  Button
} from '@material-ui/core';
import { Skeleton, Alert } from '@material-ui/lab';
import './App.css';
import ChartMaker from './Components/Chart';
class App extends Component {
  state = {
    date: '',
    loading: false
  };

  handleDateAndTime = (e) => {
    e.preventDefault();
    var newValue = e.target.Date.value;
    this.setState({
      date: newValue,
      loading: true,
      open: true
    });
    e.target.Date.value = '';
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Box component='div' className='homeDiv'>
        <Typography variant='h2'>Enter Date & Time</Typography>
        <br />
        <form onSubmit={this.handleDateAndTime}>
          <TextField
            type='datetime-local'
            label='Enter Date & Time'
            InputLabelProps={{ shrink: true }}
            name='Date'
            required
          ></TextField>
          <Button variant='contained' type='submit'>
            Add Date
          </Button>
        </form>

        <div className='chart'>
          {this.state.loading ? (
            <Fragment>
              <ChartMaker date={this.state.date} />
              <Snackbar
                open={this.state.open}
                autoHideDuration='3000'
                onClose={this.handleClose}
              >
                <Alert severity='success' onClose={this.handleClose}>
                  Date Added Successfully
                </Alert>
              </Snackbar>
            </Fragment>
          ) : (
            <Skeleton />
          )}
        </div>
      </Box>
    );
  }
}

export default App;
