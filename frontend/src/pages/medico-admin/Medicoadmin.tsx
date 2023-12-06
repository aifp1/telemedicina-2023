
import React,{useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Divider, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { deleteMedico,getMedicos } from "../../api/medico";

const drawerWidth = 240;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Medicosadmin = () => {

    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
      getMedicos.then(function(response){
        setMedicos(response.data);
    })
    }, []);

    const handleDelete = (id: any) => {
        deleteMedico(id)
    
    }
  
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    
    return (
        <Box sx={{ display: 'flex' }}>
        <Drawer 
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#054863', // Cambiar el color de fondo del Drawer a azul
              color: 'white', // Cambiar el color del texto del Drawer a blanco
            },
          }}
        >
  
          <Toolbar />
          <List>
            {['Categorias', 'Prestaciones', 'Profesional', 'Horario'].map((text, index) => (
              <Link to={`/auth/dashboard/admin/${text}`} key={text} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItem button>
                  <ListItemText>
                    <Typography variant="h6" component="div">
                      {text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: 'white', // Cambiar el color de fondo de la AppBar a blanco
              color: 'black', // Cambiar el color del texto de la AppBar a negro
            }}
          >
            <Toolbar>
              <Avatar
                alt="Logo"
                src="https://www.redsaludpopular.cl/wp-content/uploads/2021/10/MARCA-HORIZONTALRSP-300x112.png"
                sx={{ width: 170, height: 60, marginRight: 1 }}
              />
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    onClick={handleOpenUserMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Box sx={{ marginTop: '100px' }}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellidos</TableCell>
                  <TableCell>Lugar de atencion</TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                  {medicos.map((medico) => (
                      <TableRow key={medico.id_medico}>
                    <TableCell>{medico.id_medico}</TableCell>
                      <TableCell>{medico.nombres}</TableCell>
                      <TableCell>{medico.apellidos}</TableCell>
                      <TableCell>{medico.lugar_atencion}</TableCell>
                      <TableCell>
                      <Button variant="contained" color="error" onClick={() => handleDelete(medico.id_medico)}>
                      Eliminar
                      </Button>
                      </TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
            </Table>
            
          </Box>
          <Button variant="contained" color="success" onClick={() => handleInsert(medico.id_categoria)}>
                          Agregar
                          </Button>
        </Box>
      </Box>
  )
}
