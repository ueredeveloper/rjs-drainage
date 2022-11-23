import React, { useEffect, useState, useMemo, createContext, useContext } from 'react';
// material ui
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// my components
import { TopBar } from './header';
import { ElHomeMap, CollapsibleTable, ElLineChartJs, ElLatLng } from './content';
import { gmapsToArcGis } from './content/tools';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#153170',
          },
          secondary: {
            main: '#037B35',
            light: '#808d77',
            dark: '#2a3623',
            contrastText: 'rgba(251,251,251,0.87)',
          },
          error: {
            main: '#ff0004',
          },
          warning: {
            main: '#ffeb00',
          }
        }
      }),
    [mode],
  );

  const [map, setMap] = useState();
  const center = { lat: -15.794393510614238, lng: -47.670852661132805 };
  const zoom = 10;

  const [data, setData] = useState({
    latlng: { lat: -15.123456, lng: -47.123456 },
    geral: {
      markers: [],
      circles: [],
      polygons: [],
      rectangles: []
    },
    subterraneo: {
      markers: [],
      polygons: [],
      polylines: [],
    },
    superficial: {
      markers: [],
      polygons: [],
      polylines: [],
    }

  });

  function onClick() {
    console.log('on click')
  }

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <ElLatLng data={data} setData={setData} />
  )
}

