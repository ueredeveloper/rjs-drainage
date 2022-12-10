import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

function ElLatLng({ data, setData }) {

  useEffect(() => {
    /*
        data.geral.polygons.forEach(polygon => {
          let arcgis = gmapsToArcGis(polygon);
          //    console.log(arcgis)
        });*/
    console.log(data)
  }, [data]);


  const handleChange = (e) => {
    let { name, value } = e.target;
    setData(prev => {
      return {
        ...prev,
        latlng: { ...prev.latlng, [name]: value }
      }
    })
  }
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row wrap' }}
    >
      {/* entradas latitude e longitude */}
      <Box sx={{ display: 'flex', flex: 4, flexDirection: 'row' }}>
        <TextField
          sx={{
            m: 1,
            display: 'flex',
            flexGrow: 1
          }}
          label="Latitude"
          name="lat"
          value={data.latlng.lat}
          onChange={handleChange}
          size="small"
        />
        <TextField
          sx={{
            m: 1,
            display: 'flex',
            flexGrow: 1,

          }}
          label="Longitude"
          name="lng"
          value={data.latlng.lng}
          onChange={handleChange}
          size="small"
        />
      </Box>
      {/* botôes de manipulação */}
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <IconButton size="large">
          <SearchIcon />
        </IconButton>
        <IconButton size="large">
          <ContentCopyIcon />
        </IconButton></Box>
    </Box>
  )
}

export default ElLatLng;