import React, { useState } from 'react';
import { render } from 'react-dom';
import MakeshiftDrawer from './MakeshiftDrawer';
import {Button,Card} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const topGridStyle = { minHeight: '100px', backgroundColor: 'green', marginBottom: '10px' }
const midGridStyle = { minHeight: '100px', backgroundColor: 'orange', marginBottom: '10px' }
const botGridStyle = { minHeight: '100px', backgroundColor: 'blue', marginBottom: '10px' }

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Grid container direction="row" style={topGridStyle}>
      </Grid>
      <Grid container direction="row" style={midGridStyle}>
      <Card style={{padding:"10px",margin:"10px"}}>
      <h1>Tango</h1>
      </Card>
        <Grid item>
        <Card style={{padding:"10px",margin:"10px"}}>
          <Button variant="contained" color="primary" onClick={toggle}>Toggle</Button>
          <MakeshiftDrawer open={isOpen} />
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="row" style={botGridStyle}>
      </Grid>
    </div>
  );
}

render(<App />, document.getElementById('root'));
