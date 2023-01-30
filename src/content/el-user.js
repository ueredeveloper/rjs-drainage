import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/* icons */
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ElUser({ marker }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  /* table */

  const createData = (
  name,
  jan,
  fev,
  mar,
  abr,
  mai,
  jun,
  jul,
  ago,
  set,
  out,
  nov,
  dez
) => ({
  id: name.replace(" ", "_"),
  name,
  jan,
  fev,
  mar,
  abr,
  mai,
  jun,
  jul,
  ago,
  set,
  out,
  nov,
  dez,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
 
  //const classes = useStyles();
  const { isEditMode } = row;
  if(isEditMode) { console.log(row);}
  return (
    <TableCell>
      {isEditMode ? (
        <TextField
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
         variant="standard"
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

  const [rows, setRows] = React.useState([
    createData("Vazão (l/dia)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Tempo (h/dia)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    createData("Período (dias/mês)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  ]);
  const [previous, setPrevious] = React.useState({});
  //const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };
  
  /* table */

  return (
    <div>
      <Button onClick={handleOpen}><PersonAddAltIcon /></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box className='flex flex-row'>
            <Box className='mx-4'>
              <TextField id="us_nome" label="Usuário" variant="standard" />
            </Box>
            <Box>
              <TextField id="us_nome" label="Processo" variant="standard" />
            </Box>

            <IconButton size="large" onClick={() => { '_findPointsInASystem'() }}>
              <SearchIcon />
            </IconButton></Box>

          <Box>
            <Table aria-label="caption table">
       
        <TableHead>
          <TableRow>
            <TableCell  />
            <TableCell >Mês</TableCell>
            <TableCell >Jan</TableCell>
            <TableCell >Fev</TableCell>
            <TableCell >Mar</TableCell>
            <TableCell >Abr</TableCell>
            <TableCell >Mai</TableCell>
            <TableCell >Jun</TableCell>
            <TableCell >Jul</TableCell>
            <TableCell >Ago</TableCell>
            <TableCell >Set</TableCell>
            <TableCell >Out</TableCell>
            <TableCell >Nov</TableCell>
            <TableCell >Dez</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneAllOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <DoDisturbOutlinedIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <ModeEditOutlineOutlinedIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <CustomTableCell {...{ row, name: "jan", onChange }} />
              <CustomTableCell {...{ row, name: "fev", onChange }} />
              <CustomTableCell {...{ row, name: "mar", onChange }} />
              <CustomTableCell {...{ row, name: "abr", onChange }} />
              <CustomTableCell {...{ row, name: "mai", onChange }} />
              <CustomTableCell {...{ row, name: "jun", onChange }} />
              <CustomTableCell {...{ row, name: "jul", onChange }} />
              <CustomTableCell {...{ row, name: "ago", onChange }} />
              <CustomTableCell {...{ row, name: "set", onChange }} />
              <CustomTableCell {...{ row, name: "out", onChange }} />
              <CustomTableCell {...{ row, name: "nov", onChange }} />
              <CustomTableCell {...{ row, name: "dez", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}