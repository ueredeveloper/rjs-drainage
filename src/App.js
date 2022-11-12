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
import { Mapa, CollapsibleTable, ElLineChartJs } from './content';
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
    geral: {
      markers: [],
      circles: [],
      polygons: [],
      polylines: [],
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* BARRA SUPERIOR - LOGO - LOGIN - ICONE DARK MAP*/}
        <TopBar ColorModeContext={ColorModeContext} />

        <div className='flex flex-wrap'>
          {/* MAPA */}
          <div className='flex-1 min-w[200px]'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={"0"}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList>
                    <Tab label="Mapa" value="0" />
                  </TabList>
                </Box>
                <TabPanel value="0">
                  <Mapa tab={value} mode={mode} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} data={data} setData={setData} /></TabPanel>
              </TabContext>
            </Box>
          </div>
          {/* TAB PANES (BUSCAR, SUPERFICIAL SUBTERÂNEO */}
          <div className='flex-1 min-w[200px]'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Geral" value="1" />
                    <Tab label="Superficial" value="2" />
                    <Tab label="Subterrâneo" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <ElLineChartJs />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
        {/* TABELAS */}
        <div>

          <CollapsibleTable /></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

