import {format} from 'date-fns'
import PropTypes from 'prop-types'
import getTimeDifference from './retornaHora/retornaHora'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import BlockIcon from '@mui/icons-material/Block';
import { Scrollbar } from './scrollbar';
import { SeverityPill } from './severity-pill';
import { useState } from 'react';

const handleClick = () => {
  return(
    <input type='text'/>
  )
}


export const OverviewLatestOrders = (props) => {
  //const [busca, setBusca] = useState('')
  const { users = [] } = props;
  
  //const usuariosFiltrados = users.filter((user) => user.includes(busca))
  
  return (
    <Card style={{border: '4px solid rgb(230, 231, 232, 0.9)'}}>
      <Card style={{display: 'flex',alignItems:'center', justifyContent:'space-between'}}>
        <CardHeader title="Latest Orders" onClick={handleClick} />
        
      </Card>
      <Scrollbar>
        <Box style={{width: '100%', }}>
          <Table>
          <TableHead style={
            { backgroundColor: 'rgb(230, 231, 232)',
            color: 'rgb(0, 0, 70)',
          }}>
                <TableRow>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell>
                    User Name
                  </TableCell>
                  <TableCell>
                    Date
                  </TableCell>
          
                </TableRow>
          </TableHead>
            <TableBody>
              {users.map((user) => {
                return (
                  <TableRow
                    hover
                    key={user.Name}
                  >
                    <TableCell>
                      <SeverityPill style={user.PasswordExpired == ' True' ? {backgroundColor: 'rgba(16, 185, 129, 0.12', 
                       color: '#0B815A', 
                       fontFamily: "Helvetica",
                       height: '30px',
                      } : 
                       {backgroundColor: 'rgba(240, 68, 56, 0.12)', 
                       color: '#B42318',
                       height: '30px',
                       }}>
                      {user.PasswordExpired == ' True' ? <p style={{
                        display:'flex', 
                        alignItems:'center',
                        }}>LOCK<LockOpenIcon style={{width:'17px', paddingLeft:'5px'}}/></p>:<p style={{
                          display:'flex', 
                          alignItems:'center'
                          }}>UNLOCK<LockIcon style={{width:'17px', paddingLeft:'5px'}}/></p>}
                      </SeverityPill>

                      <SeverityPill style={{
                        backgroundColor: 'rgba(247, 144, 9, 0.12)', 
                        color: '#B54708', 
                        marginLeft: '3px',
                        marginTop: '5px',
                        
                        }}>
                        {user.LockedOut == 'True' ?<p style={{
                          display:'flex', 
                          alignItems:'center',
                          height: '5px',
                          }}>BLOCKED<BlockIcon style={{width:'17px', paddingLeft:'5px'}}/></p>: ''}
                      </SeverityPill>
                    </TableCell>

                    <TableCell>
                      {user.Name}
                    </TableCell>
                    <TableCell>
                    {getTimeDifference(user.LastLogonDate)}
                    </TableCell>
                    
                  </TableRow>
                  
                );
              })}
              
            </TableBody>
          </Table>
          
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  usuarios: PropTypes.array,
  sx: PropTypes.object
};
