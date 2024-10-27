import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { Box } from '@mui/material'
import AppNavbar from '../AppNavBar'

function Layout() {


  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '16px', paddingTop: { xs: '64px', md: '0px' }, position: 'relative', padding: { xs: '16px' }, paddingLeft: { md: '0px' }, }}>
      <AppNavbar />
      <Sidebar />
      <Outlet />
    </Box>
  )
}

export default Layout