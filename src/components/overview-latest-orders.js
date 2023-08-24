import React,{useEffect, useState, useMemo} from 'react'
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
import TextField from '@mui/material/TextField';
import BlockIcon from '@mui/icons-material/Block';
import { Scrollbar } from './scrollbar';
import { SeverityPill } from './severity-pill';
import api from '../datas/dados.JSON'

export const OverviewLatestOrders = () => {
  const [users, setUsers] = useState([])
  const [busca, setBusca] = useState('')
  
  const usuariosFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return users.filter(user=> user.Name.toLowerCase().includes(lowerBusca))
  },[busca, users])

  useEffect(()=>{
    fetch(api)
    .then(resp => resp.json())
    .then(data=> setUsers(data))
  }, [])
  

  
  return (
    <Card style={{border: '4px solid rgb(230, 231, 232, 0.9)'}}>
      <Card style={{display: 'flex',alignItems:'center', justifyContent:'space-between'}}>
        <CardHeader title="Latest Orders" style={{margin: 0}}/>
        <TextField
          id="standard-textarea"
          label="Search Name"
          placeholder="Digite um nome"
          multiline
          variant="standard"
          style={{
            marginRight:'20px',
            marginBottom: '15px',
            backgroundColor:'#fff',
            color: '#fff'
          }}
          value={busca}
          onChange={e=>setBusca(e.target.value)}
        />
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
              {usuariosFiltrados.map((user) => {
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
