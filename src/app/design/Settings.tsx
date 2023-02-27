import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon, Typography } from '@mui/material';
import { MdClose, MdMenuOpen, MdSettings } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { CgNpm } from 'react-icons/cg';
import DrawerMenuSettings from './DrawerMenuSettings';
import DrawerMenuSettingsTitle from './DrawerMenuSettingsTitle';
import { height } from '@mui/system';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Settings() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Box>
      <Icon component={MdSettings} onClick={toggleDrawer('right', true)} />
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        <Box
          sx={{
            width: 300,
            bgcolor: '#2C5282',
            height: '100%',
          }}
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          <Box paddingY="1rem">
            <DrawerMenuSettingsTitle title="Configurações" />
            <Icon
              aria-label="close"
              component={MdClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                cursor: 'pointer',
              }}
            />

            <DrawerMenuSettings title="Usuários" icon={FaUser} />
            <DrawerMenuSettings title="Minha empresa" icon={CgNpm} />
            <DrawerMenuSettings title="Menus" icon={MdMenuOpen} />
            <DrawerMenuSettings title="Parâmetros" icon={MdSettings} />
          </Box>
          <Divider color="#fff" />
          <Box>
            <DrawerMenuSettingsTitle title="Importações" />
            <DrawerMenuSettings title="Importação de pessoas" icon={FaUser} />
            <DrawerMenuSettings title="Importação de produtos" icon={CgNpm} />
            <DrawerMenuSettings
              title="Importação carga tributária (IBPT)"
              icon={CgNpm}
            />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
