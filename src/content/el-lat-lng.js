import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import { findPointsInASystem } from '../services';



function ElLatLng({ map, tp_id, position, setData }) {

  const [_position, _setPosition] = useState(position);
  const [_tp_id, _setTpId] = useState(tp_id);

  useEffect(() => {
    _setPosition(position);
    _setTpId(tp_id);

  }, [position, tp_id]);

  const handleChange = (event) => {

    setData(prev => {
      return {
        ...prev,
        overlays: {
          ...prev.overlays,
          marker: {
            ...prev.overlays.marker,
            position: {
              ...prev.overlays.marker.position,
              [event.target.name]: event.target.value
            }
          }
        }
      }
    });
  };

  async function _findPointsInASystem() {
    let points = await findPointsInASystem(_tp_id, _position.lat, _position.lng);

    console.log(points)
    setData(prev => {
      return {
        ...prev,
        system: { outorgas: points._outorgas, hg_shape: points._hg_shape, hg_info: points._hg_info }
      }

    });
    map.setCenter({ lat: parseFloat(_position.lat), lng: parseFloat(_position.lng) })
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
          value={_position.lat}
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
          value={_position.lng}
          onChange={handleChange}
          size="small"
        />
      </Box>
      {/* botôes de manipulação */}
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <IconButton size="large" onClick={() => { _findPointsInASystem() }}>
          <SearchIcon />
        </IconButton>
        <IconButton size="large">
          <ContentCopyIcon />
        </IconButton>
      </Box>

    </Box>

  )
}

export default ElLatLng;