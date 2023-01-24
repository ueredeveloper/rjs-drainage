import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  us_nome, us_cpf_cnpj, int_processo, emp_endereco, int_latitude, int_longitude, finalidades) {
  return {
    us_nome,
    us_cpf_cnpj,
    int_processo,
    emp_endereco,
    int_latitude,
    int_longitude,
    finalidades
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {/* icon down up*/}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/*infos */}
        <TableCell align="right">{row.us_nome}</TableCell>
        <TableCell align="right">{row.us_cpf_cnpj}</TableCell>
        <TableCell align="right">{row.int_processo}</TableCell>
        <TableCell align="right">{row.emp_endereco}</TableCell>
        <TableCell align="right">{row.int_latitude}</TableCell>
        <TableCell align="right">{row.int_longitude}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* Detalhes - Título */}
              <Typography variant="h6" gutterBottom component="div">
                Finalidades
              </Typography>
              <Table size="small" aria-label="purchases">
                {/* th - table head */}
                <TableHead>
                  <TableRow>
                    <TableCell>Id Finalidade</TableCell>
                    <TableCell>Finalidade</TableCell>
                    <TableCell align="right">Vazão</TableCell>
                    <TableCell align="right">Id Interferência</TableCell>
                  </TableRow>
                </TableHead>
                {/*tbody - table body */}
                
                <TableBody>
                 {row.finalidades.map((fin) => (
                    <TableRow key={fin.id_finalidade[0]}>
                      <TableCell component="th" scope="row">
                        {fin.id_finalidade[0]}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {fin.descricao[0]}
                      </TableCell>
                      <TableCell>{fin.vazao[0]}</TableCell>
                      <TableCell align="right">{fin.id_interferencia[0]}</TableCell>
                      <TableCell align="right">
                        {/*Math.round(fin.amount * row.price * 100) / 100*/}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

/*
Row.propTypes = {
  row: PropTypes.shape({
    us_nome: PropTypes.string.isRequired,
    us_cpf_cnpj: PropTypes.string.isRequired,
    int_processo: PropTypes.string.isRequired,
    emp_endereco: PropTypes.string.isRequired,
    int_latitude: PropTypes.string.isRequired,
    int_longitude: PropTypes.string.isRequired,
    finalidades: PropTypes.arrayOf(
      PropTypes.shape({
        id_finalidade: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        vazao: PropTypes.string.isRequired,
        id_interferencia: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};*/

/*
const rows = [
  createData('', '', '', '', '', ''),
];*/

export default function CollapsibleTable({ outorgas }) {

  const [rows, setRows] = useState([createData('', '', '', '', '', '', [])])

  const _setRows = (outorgas) => {

    let _outorgas = outorgas.map(o => {
      return createData(
        o.us_nome,
        o.us_cpf_cnpj,
        o.int_processo,
        o.emp_endereco,
        o.int_latitude,
        o.int_longitude,
        []
      )
    })
    setRows(_outorgas);
  }
  useEffect(() => {
    if (outorgas.length != 0) _setRows(outorgas);
  }, [outorgas]);


  return (
    <TableContainer sx={{ maxHeight: 300 }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">CPF/CNPJ</TableCell>
            <TableCell align="right">Processo</TableCell>
            <TableCell align="right">Endereço</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}