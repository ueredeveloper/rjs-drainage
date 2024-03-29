import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
/**
* Elemento de escolha do tipo de poço, se 1 - manual (poroso), ou 2 - tubular (fraturado).
* @param tp_id Tipo de poço, se manual ou tubular.
* @param setData Hooks de mudança de estado da variável inicial data.
*/
function ElWellType({ tp_id, setData }) {

  const [_tp_id, _setTpId] = useState(tp_id);

  const handleChange = (event) => {
    _setTpId(event.target.value);

    setData(prev => {
      return {
        ...prev,
        overlays: {
          ...prev.overlays,
          marker: {
            ...prev.overlays.marker,
            info: {
              ...prev.overlays.marker.info,
              tp_id: _tp_id
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    setData(prev => {
      return {
        ...prev,
        overlays: {
          ...prev.overlays,
          marker: {
            ...prev.overlays.marker,
            info: {
              ...prev.overlays.marker.info,
              tp_id: _tp_id
            }
          }
        }
      }
    });
  }, [_tp_id])

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Tipo do Poço</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={_tp_id}
        onChange={handleChange}
        sx={{ display: 'flex', flexFlow: 'row wrap' }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Manual" />
        <FormControlLabel value="2" control={<Radio />} label="Tubular" />
      </RadioGroup>
    </FormControl>
  )
}

export default ElWellType;