import { useEffect, useState } from "react";
import { OverviewLatestOrders } from "./components/overview-latest-orders";
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material'
import api from './datas/dados.JSON'
import url from './datas/data.JSON'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'
import {Scrollbars} from 'react-custom-scrollbars-2'



function App() {

const [users, setUsers] = useState([])


useEffect(()=>{
  fetch(api)
  .then(resp => resp.json())
  .then(data=> setUsers(data))
}, [])

  return (
      <Scrollbars style={{width: '50%', height: '60vh'}}>
       <Grid>
         <OverviewLatestOrders
            users={users}
          /> 
        </Grid>
        </Scrollbars>
    
  );
}

export default App;
