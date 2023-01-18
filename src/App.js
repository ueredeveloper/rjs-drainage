import React, { useState, useEffect, useMemo, createContext } from 'react';
// material ui
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// my components
import { TopBar } from './header';
import { ElHomeMap, CollapsibleTable, ElLineChartJs, ElLatLng } from './content';

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
    overlays: {
      marker: {
        id: null,
        info: { tp_id: null },
        position: { lat: -15.7749874, lng: -47.9402802 }
      },
      markers: [],
      circles: [],
      polygons: [],
      rectangles: []
    },
    shapes: {
      fraturado: {checked: false, shapes:[1,2,5]},
      poroso: {checked: false, shapes:[]}
    }
  });

  useEffect(() => {
    console.log(JSON.stringify(data.overlays.markers))
  }, [data])

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
                  <ElHomeMap tab={value} mode={mode} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} data={data} setData={setData} /></TabPanel>
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
                  <ElLatLng data={data} setData={setData} />
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

