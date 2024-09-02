import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useState, useEffect } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'image',
    headerName: 'Gambar',
    width: 200,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Avatar 
        src={params.value} 
        alt={params.row.name} 
        sx={{ width: '100%', height: '100%' }} />
    ),
  },
  { field: 'name', headerName: 'Nama', width: 180 },
  { field: 'jobTitle', headerName: 'Jabatan', width: 300 },
  { field: 'unit_placement', headerName: 'Unit Kerja', width: 160, sortable: false },
  {
    field: 'opd',
    headerName: 'OPD',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Sdm() {

    const [sipilData, setSipilData] = useState([]);
    const [nonAsnData, setNonAsnData] = useState([]);

    useEffect(() => {
        async function fetchSipilData() {
            try {
              const { data: sipil } = await axios.get("/api/pegawai/sipil");
              setSipilData(sipil);
            } catch (error) {
              console.error("Error fetching pegawai sipil data:", error);
            }
          }

        async function fetchNonAsnData() {
            try {
              const { data: nonAsn } = await axios.get("/api/pegawai/non-asn");
              setNonAsnData(nonAsn);
            } catch (error) {
              console.error("Error fetching pegawai non-ASN data:", error);
            }
          }
        fetchSipilData();
        fetchNonAsnData();
    }, []);

    const rows = sipilData.map((pegawai, index) => ({
        id: index + 1, 
        image: pegawai.image,
        name: pegawai.name,
        jobTitle: pegawai.jobTitle,
        unit_placement: pegawai.unit_placement,
        opd: pegawai.opd,
      }));
    
    const rows2 = nonAsnData.map((pegawai, index) => ({
        id: index + 1, 
        image: pegawai.image,
        name: pegawai.name,
        jobTitle: pegawai.jobTitle,
        unit_placement: pegawai.unit_placement, 
        opd: pegawai.opd, 
      }));

    return (
        <>
            <h1>Data Pegawai Negeri Sipil</h1>
            <Paper sx={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                    rowHeight={200}
                />
            </Paper>
            <h1>Data Pegawai Non-ASN</h1>
            <Paper sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows2}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                    rowHeight={200}
                />
            </Paper>
        </>
    );
}
