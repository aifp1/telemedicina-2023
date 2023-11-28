
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
import { getPrestaciones } from "../../api/prestaciones";

const drawerWidth = 240;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Prestacionesadmin = () => {

    const [prestaciones, setPrestaciones] = useState([]);

    useEffect(() => {
      getPrestaciones.then(function(response){
        const lista = [];
        for(let key in response.data){
            const obj = {
                id_categoria: response.data[key].id_categoria,
                id_prestacion: response.data[key].data[0].id_prestacion,
                nombre_prestacion: response.data[key].data[0].nombre_prestacion,
            }
            lista.push(obj);
        }
        console.log(lista)
        setPrestaciones(lista);
    })
    }, []);
  
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
            {['Categorias', 'Prestaciones', 'Profesional', 'Tomar Hora', 'Agregar Administrador'].map((text, index) => (
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
                  <TableCell>Nombre prestacion</TableCell>
                  <TableCell>ID categoria</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {prestaciones.map((prestacion) => (
                      <TableRow key={prestacion.id_prestacion}>
                      <TableCell>{prestacion.id_prestacion}</TableCell>
                      <TableCell>{prestacion.nombre_prestacion}</TableCell>
                      <TableCell>{prestacion.id_categoria}</TableCell>
                      <TableCell>
                      <Button variant="contained" color="error" onClick={() => handleDelete(prestacion.id_categoria)}>
                      Delete
                      </Button>
                      </TableCell>
                      <TableCell>
                          <Button variant="contained" color="primary" onClick={() => handleEdit(prestacion.id_categoria)}>
                          Edit
                          </Button>
                      </TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
  )
}
