import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Regulasi() {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h1" gutterBottom>
                Regulasi Kecamatan Ngijo, Kota Semarang
            </Typography>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h2">Kategori</Typography></TableCell>
                            <TableCell><Typography variant="h2">Detail</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Regulasi Lingkungan</TableCell>
                            <TableCell>
                                <ul>
                                    <li>Pengelolaan sampah: Setiap rumah tangga diwajibkan memilah sampah organik dan non-organik.</li>
                                    <li>Penghijauan: Penanaman pohon di area publik dan pelarangan penebangan pohon sembarangan.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Regulasi Pembangunan</TableCell>
                            <TableCell>
                                <ul>
                                    <li>Izin Mendirikan Bangunan (IMB): Setiap pembangunan baru harus mendapatkan izin dari pemerintah desa.</li>
                                    <li>Konstruksi berkelanjutan: Penggunaan bahan ramah lingkungan dan teknologi hemat energi dalam setiap proyek pembangunan.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Regulasi Keamanan</TableCell>
                            <TableCell>
                                <ul>
                                    <li>Patroli Keamanan: Penugasan petugas keamanan desa untuk patroli rutin guna menjaga ketertiban.</li>
                                    <li>Sistem pelaporan: Warga diharapkan melaporkan kejadian yang mencurigakan kepada aparat keamanan desa.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
