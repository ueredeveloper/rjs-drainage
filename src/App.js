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
import { ElHomeMap, CollapsibleTable, ElBarChart, ElLatLng, ElWellType } from './content';

const ColorModeContext = createContext({ toggleColorMode: () => { } });
/**
* Estado inicial necessário para limpar o mapa quando precisar. Quando for solicitado a limpeza do mapa a função retornará a variável data para o estado inicial.
*
*/
const initialState = () => {
  return (
    {
      overlays: {
        marker: {
          id: null,
          info: { id: null, tp_id: 1 },
         /* position: { lat: -15.7749874, lng: -47.9402802 },*/
          position: {lat: -15.821111,lng: -48.101111}
        },
        markers: [],
        circles: [],
        polygons: [],
        rectangles: []
      },
      system: {
        outorgas: [
          {
            "id": 5220,
            "us_id": 36426,
            "us_nome": "LAUNÍLIO DE SOUSA OLIVEIRA",
            "us_cpf_cnpj": "31373119187",
            "us_email": null,
            "us_cep": " ",
            "us_endereco": "Nucleo Rural Bananal, Chacara 13",
            "us_caixa_postal": "0",
            "us_bairro": " ",
            "us_telefone_1": "6130332677",
            "us_telefone_2": "",
            "emp_id": 40996,
            "emp_endereco": "NÚCLEO RURAL BANANAL, CHÁCARA 13",
            "int_processo": "197000312/2007",
            "int_id": 2473,
            "int_num_ato": "003/2008",
            "int_latitude": -15.725594,
            "int_longitude": -47.901416,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.901415533999966,
                -15.72559362499993
              ]
            },
            "int_data_publicacao": "2008-10-03T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": {
                "id_finalidade": "11791930",
                "id_tipo_finalidade": "7",
                "id_interferencia": "2473",
                "vazao": "1200.0000",
                "subfinalidade": " ",
                "descricao": "ABASTECIMENTO HUMANO"
              }
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68194689",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "1",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68202296",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "2",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "33.600000"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68209903",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "3",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68217510",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "4",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "36.000000"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68225117",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "5",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68232724",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "6",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "36.000000"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68240331",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "7",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68247938",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "8",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68255545",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "9",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "36.000000"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68263152",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "10",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68270759",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "11",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "36.000000"
                },
                {
                  "id_interferencia": "2473",
                  "id_demanta_total": "68278366",
                  "vazao_lh": "600.00",
                  "vazao_dia": "1200.00",
                  "mes": "12",
                  "vazao_mh": "0.6000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "1"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 5223,
            "us_id": 37576,
            "us_nome": "ROBERTO ROVARIS",
            "us_cpf_cnpj": "33453799968",
            "us_email": null,
            "us_cep": " ",
            "us_endereco": "Nucleo Rural Bananal, Chacara 17",
            "us_caixa_postal": "0",
            "us_bairro": "LAGO NORTE",
            "us_telefone_1": "6134875829",
            "us_telefone_2": "92258020",
            "emp_id": 40998,
            "emp_endereco": "NUCLEO RURAL BANANAL, CHACARA 17",
            "int_processo": "197000296/2007",
            "int_id": 2476,
            "int_num_ato": "082/2007",
            "int_latitude": -15.725316,
            "int_longitude": -47.903766,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.90376599099994,
                -15.725315498999976
              ]
            },
            "int_data_publicacao": "2007-12-21T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": [
                {
                  "id_finalidade": "11788253",
                  "id_tipo_finalidade": "7",
                  "id_interferencia": "2476",
                  "vazao": "800.0000",
                  "subfinalidade": " ",
                  "descricao": "ABASTECIMENTO HUMANO"
                },
                {
                  "id_finalidade": "11799734",
                  "id_tipo_finalidade": "10",
                  "id_interferencia": "2476",
                  "vazao": "100.0000",
                  "subfinalidade": "HORTALIÇAS",
                  "descricao": "IRRIGAÇÃO DE CULTURAS"
                }
              ]
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68194692",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "1",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "24.800000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68202299",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "2",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "22.400000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68209906",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "3",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "24.800000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68217513",
                  "vazao_lh": "900.00",
                  "vazao_dia": "900.00",
                  "mes": "4",
                  "vazao_mh": "0.9000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.9000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "27.000000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68225120",
                  "vazao_lh": "900.00",
                  "vazao_dia": "900.00",
                  "mes": "5",
                  "vazao_mh": "0.9000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.9000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "27.900000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68232727",
                  "vazao_lh": "900.00",
                  "vazao_dia": "900.00",
                  "mes": "6",
                  "vazao_mh": "0.9000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.9000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "27.000000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68240334",
                  "vazao_lh": "900.00",
                  "vazao_dia": "900.00",
                  "mes": "7",
                  "vazao_mh": "0.9000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.9000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "27.900000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68247941",
                  "vazao_lh": "900.00",
                  "vazao_dia": "900.00",
                  "mes": "8",
                  "vazao_mh": "0.9000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.9000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "27.900000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68255548",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "9",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "24.000000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68263155",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "10",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "24.800000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68270762",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "11",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "24.000000"
                },
                {
                  "id_interferencia": "2476",
                  "id_demanta_total": "68278369",
                  "vazao_lh": "800.00",
                  "vazao_dia": "800.00",
                  "mes": "12",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "1",
                  "vol_max_md": "0.8000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "24.800000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 5354,
            "us_id": 36421,
            "us_nome": "LAUCÍLIO DE OLIVEIRA SOUZA",
            "us_cpf_cnpj": "02938707134",
            "us_email": null,
            "us_cep": "71504700",
            "us_endereco": "Nucle Rural Bananal, Chacara 15",
            "us_caixa_postal": "0",
            "us_bairro": "LAGO NORTE",
            "us_telefone_1": "6130332677",
            "us_telefone_2": "6196480018",
            "emp_id": 40993,
            "emp_endereco": "NUCLE RURAL BANANAL, CHACARA 15",
            "int_processo": "197000117/2007",
            "int_id": 2684,
            "int_num_ato": "138/2009",
            "int_latitude": -15.725386,
            "int_longitude": -47.902704,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.902704308999944,
                -15.725386132999972
              ]
            },
            "int_data_publicacao": "2009-12-01T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": {
                "id_finalidade": "11790707",
                "id_tipo_finalidade": "7",
                "id_interferencia": "2684",
                "vazao": "3200.0000",
                "subfinalidade": " ",
                "descricao": "ABASTECIMENTO HUMANO"
              }
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68194900",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "1",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68202507",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "2",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "89.600000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68210114",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "3",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68217721",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "4",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "96.000000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68225328",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "5",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68232935",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "6",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "96.000000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68240542",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "7",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68248149",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "8",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68255756",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "9",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "96.000000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68263363",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "10",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68270970",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "11",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "96.000000"
                },
                {
                  "id_interferencia": "2684",
                  "id_demanta_total": "68278577",
                  "vazao_lh": "800.00",
                  "vazao_dia": "3200.00",
                  "mes": "12",
                  "vazao_mh": "0.8000000",
                  "tempo_h": "4",
                  "vol_max_md": "3.2000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "99.200000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 5360,
            "us_id": 37660,
            "us_nome": "RUTH AUXILIADORA LEAL COSTA SANTOS",
            "us_cpf_cnpj": "53562356668",
            "us_email": null,
            "us_cep": " ",
            "us_endereco": "Nucleo Rural Bananal, Chacara 20",
            "us_caixa_postal": "0",
            "us_bairro": "LAGO NORTE",
            "us_telefone_1": "6199793819",
            "us_telefone_2": "6192860111",
            "emp_id": 41000,
            "emp_endereco": "NUCLEO RURAL BANANAL, CHACARA 20",
            "int_processo": "197000092/2010",
            "int_id": 2690,
            "int_num_ato": "030/2010",
            "int_latitude": -15.724974,
            "int_longitude": -47.904908,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.90490810299997,
                -15.72497412599995
              ]
            },
            "int_data_publicacao": "2010-03-18T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": [
                {
                  "id_finalidade": "11792028",
                  "id_tipo_finalidade": "7",
                  "id_interferencia": "2690",
                  "vazao": "1040.0000",
                  "subfinalidade": " ",
                  "descricao": "ABASTECIMENTO HUMANO"
                },
                {
                  "id_finalidade": "11793788",
                  "id_tipo_finalidade": "8",
                  "id_interferencia": "2690",
                  "vazao": "0.0000",
                  "subfinalidade": "AVES",
                  "descricao": "CRIAÇÃO/DESSEDENTAÇÃO ANIMAL"
                }
              ]
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68194906",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "1",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68202513",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "2",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "29.120000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68210120",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "3",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68217727",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "4",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "31.200000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68225334",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "5",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68232941",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "6",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "31.200000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68240548",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "7",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68248155",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "8",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68255762",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "9",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "31.200000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68263369",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "10",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68270976",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "11",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "31.200000"
                },
                {
                  "id_interferencia": "2690",
                  "id_demanta_total": "68278583",
                  "vazao_lh": "260.00",
                  "vazao_dia": "1040.00",
                  "mes": "12",
                  "vazao_mh": "0.2600000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "32.240000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 5361,
            "us_id": 38025,
            "us_nome": "VALDECI JOSÉ SANTANA",
            "us_cpf_cnpj": "32705522115",
            "us_email": null,
            "us_cep": "71540700",
            "us_endereco": "Nucleo Rural Bananal, Chacara 18",
            "us_caixa_postal": "0",
            "us_bairro": "LAGO NORTE",
            "us_telefone_1": "6192860111",
            "us_telefone_2": "",
            "emp_id": 40999,
            "emp_endereco": "NUCLEO RURAL BANANAL, CHACARA 18",
            "int_processo": "197000089/2010",
            "int_id": 2691,
            "int_num_ato": "035/2010",
            "int_latitude": -15.724957,
            "int_longitude": -47.903989,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.90398875999995,
                -15.724957165999967
              ]
            },
            "int_data_publicacao": "2010-03-18T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": {
                "id_finalidade": "11790708",
                "id_tipo_finalidade": "7",
                "id_interferencia": "2691",
                "vazao": "1000.0000",
                "subfinalidade": " ",
                "descricao": "ABASTECIMENTO HUMANO"
              }
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68194907",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "1",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68202514",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "2",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "28.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68210121",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "3",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68217728",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "4",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68225335",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "5",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68232942",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "6",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68240549",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "7",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68248156",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "8",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68255763",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "9",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68263370",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "10",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68270977",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "11",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "2691",
                  "id_demanta_total": "68278584",
                  "vazao_lh": "250.00",
                  "vazao_dia": "1000.00",
                  "mes": "12",
                  "vazao_mh": "0.2500000",
                  "tempo_h": "4",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 5369,
            "us_id": 36524,
            "us_nome": "LÚCIA FÁTIMA DE OLIVEIRA",
            "us_cpf_cnpj": "31695175115",
            "us_email": null,
            "us_cep": " ",
            "us_endereco": "Nucleo Rural Bananal, Chacara 16",
            "us_caixa_postal": "0",
            "us_bairro": "LAGO NORTE",
            "us_telefone_1": "61",
            "us_telefone_2": "",
            "emp_id": 40997,
            "emp_endereco": "NUCLEO RURAL BANANAL, CHACARA 16",
            "int_processo": "197000314/2007",
            "int_id": 2699,
            "int_num_ato": "006/2008",
            "int_latitude": -15.725577,
            "int_longitude": -47.903345,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.90334528699998,
                -15.725576969999963
              ]
            },
            "int_data_publicacao": "2008-03-10T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": {
                "id_finalidade": "11789706",
                "id_tipo_finalidade": "7",
                "id_interferencia": "2699",
                "vazao": "240.0000",
                "subfinalidade": " ",
                "descricao": "ABASTECIMENTO HUMANO"
              }
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68194915",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "1",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68202522",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "2",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "28",
                  "vol_mensal_mm": "6.720000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68210129",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "3",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68217736",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "4",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "7.200000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68225343",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "5",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68232950",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "6",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "7.200000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68240557",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "7",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68248164",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "8",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68255771",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "9",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "7.200000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68263378",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "10",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68270985",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "11",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "7.200000"
                },
                {
                  "id_interferencia": "2699",
                  "id_demanta_total": "68278592",
                  "vazao_lh": "240.00",
                  "vazao_dia": "240.00",
                  "mes": "12",
                  "vazao_mh": "0.2400000",
                  "tempo_h": "1",
                  "vol_max_md": "0.2400000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "7.440000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          },
          {
            "id": 6821,
            "us_id": 34470,
            "us_nome": "ASSOCIAÇÃO DOS SERVIDORES DA SECRETARIA DE AGRICULTURA DO DF - ARCEF",
            "us_cpf_cnpj": "00373126000101",
            "us_email": null,
            "us_cep": "72140400",
            "us_endereco": "QNJ 40, CASA 06",
            "us_caixa_postal": "0",
            "us_bairro": "TAGUATINGA NORTE",
            "us_telefone_1": "6184125116",
            "us_telefone_2": "",
            "emp_id": 64059,
            "emp_endereco": "SAIN PARQUE RURAL, S/N (POÇO 01)",
            "int_processo": "197001348/2012",
            "int_id": 7061,
            "int_num_ato": "0141/2012",
            "int_latitude": -15.734525,
            "int_longitude": -47.910483,
            "int_shape": {
              "type": "Point",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "EPSG:4674"
                }
              },
              "coordinates": [
                -47.91048286999995,
                -15.73452548299997
              ]
            },
            "int_data_publicacao": "2012-12-28T00:00:00.000Z",
            "int_data_vencimento": "2099-12-31T00:00:00.000Z",
            "ti_id": 2,
            "ti_descricao": "SUBTERRANEA",
            "sp_id": 4,
            "sp_descricao": "OUTORGADO",
            "tp_id": 1,
            "tp_descricao": "MANUAL    ",
            "to_tipo_outorga": 3,
            "to_descricao": "REGISTRO DE USO",
            "bh_id": 7,
            "bh_nome": "Rio Paranoá",
            "uh_id": 34,
            "uh_nome": "Ribeirão Bananal",
            "hg_codigo": "022_07_P1",
            "hg_sistema": "P1",
            "hg_subsistema": "",
            "finalidades": {
              "finalidades": {
                "id_finalidade": "11798953",
                "id_tipo_finalidade": "10",
                "id_interferencia": "7061",
                "vazao": "1000.0000",
                "subfinalidade": "PAISAGISMO",
                "descricao": "IRRIGAÇÃO DE CULTURAS"
              }
            },
            "demandas": {
              "demandas": [
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68199277",
                  "vazao_lh": "0.00",
                  "vazao_dia": "0.00",
                  "mes": "1",
                  "vazao_mh": "0.0000000",
                  "tempo_h": "0",
                  "vol_max_md": "0.0000000",
                  "periodo_d": "0",
                  "vol_mensal_mm": "0.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68206884",
                  "vazao_lh": "0.00",
                  "vazao_dia": "0.00",
                  "mes": "2",
                  "vazao_mh": "0.0000000",
                  "tempo_h": "0",
                  "vol_max_md": "0.0000000",
                  "periodo_d": "0",
                  "vol_mensal_mm": "0.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68214491",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "3",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68222098",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "4",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68229705",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "5",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68237312",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "6",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68244919",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "7",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68252526",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "8",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "31",
                  "vol_mensal_mm": "31.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68260133",
                  "vazao_lh": "500.00",
                  "vazao_dia": "1000.00",
                  "mes": "9",
                  "vazao_mh": "0.5000000",
                  "tempo_h": "2",
                  "vol_max_md": "1.0000000",
                  "periodo_d": "30",
                  "vol_mensal_mm": "30.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68267740",
                  "vazao_lh": "0.00",
                  "vazao_dia": "0.00",
                  "mes": "10",
                  "vazao_mh": "0.0000000",
                  "tempo_h": "0",
                  "vol_max_md": "0.0000000",
                  "periodo_d": "0",
                  "vol_mensal_mm": "0.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68275347",
                  "vazao_lh": "0.00",
                  "vazao_dia": "0.00",
                  "mes": "11",
                  "vazao_mh": "0.0000000",
                  "tempo_h": "0",
                  "vol_max_md": "0.0000000",
                  "periodo_d": "0",
                  "vol_mensal_mm": "0.000000"
                },
                {
                  "id_interferencia": "7061",
                  "id_demanta_total": "68282954",
                  "vazao_lh": "0.00",
                  "vazao_dia": "0.00",
                  "mes": "12",
                  "vazao_mh": "0.0000000",
                  "tempo_h": "0",
                  "vol_max_md": "0.0000000",
                  "periodo_d": "0",
                  "vol_mensal_mm": "0.000000"
                }
              ],
              "volume": {
                "vol_a_ma": "1"
              }
            }
          }
        ], hg_shape: { type: null, coordinates: [] }, hg_info: {
          bacia_nome: "",
          cod_plan: "",
          re_cm_ano: 10,
          sistema: "",
          uh_codigo: 0,
          uh_label: ""
        }
      },
      shapes: {
        fraturado: { checked: false, shapes: [] },
        poroso: { checked: false, shapes: [] }
      }
    }
  )
};

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

  const theme = useMemo(() =>
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
  const center = { lat: -15.762744, lng: -47.813301 };
  const zoom = 10;

  const [data, setData] = useState(initialState());

  useEffect(() => {

    console.log(data.system.outorgas.length)
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
                  <ElLatLng
                    map={map}
                    tp_id={data.overlays.marker.info.tp_id}
                    position={data.overlays.marker.position}
                    setData={setData}
                  />
                  <ElWellType
                    tp_id={data.overlays.marker.info.tp_id}
                    setData={setData} />
                  <ElBarChart system={data.system} />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
        {/* TABELAS */}
        <div>
          <CollapsibleTable outorgas={data.system.outorgas} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export { initialState }
