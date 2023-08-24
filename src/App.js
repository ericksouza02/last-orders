import { useEffect, useState } from "react";
import { OverviewLatestOrders } from "./components/overview-latest-orders";
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material'

import url from './datas/data.JSON'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'
import {Scrollbars} from 'react-custom-scrollbars-2'



function App() {

  return (
      <Scrollbars style={{width: '50%', height: '60vh'}}>
       <Grid>
         <OverviewLatestOrders
          /> 
        </Grid>
        </Scrollbars>
    
  );
}

export default App;
