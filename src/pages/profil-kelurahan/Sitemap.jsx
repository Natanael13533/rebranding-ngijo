import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Sitemap() {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h1" gutterBottom>
                Sitemap Kecamatan Ngijo, Kota Semarang
            </Typography>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h2">Kategori</Typography></TableCell>
                            <TableCell><Typography variant="h2">Halaman</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Beranda</TableCell>
                            <TableCell>
                                <a href="/">Beranda</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tentang Kami</TableCell>
                            <TableCell>
                                <a href="/about">Profil Kecamatan</a>, <br />
                                <a href="/history">Sejarah Kecamatan</a>, <br />
                                <a href="/team">Tim Kami</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Layanan Publik</TableCell>
                            <TableCell>
                                <a href="/services">Daftar Layanan</a>, <br />
                                <a href="/permits">Pengajuan Izin</a>, <br />
                                <a href="/complaints">Pengaduan Masyarakat</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Berita dan Pengumuman</TableCell>
                            <TableCell>
                                <a href="/news">Berita Terbaru</a>, <br />
                                <a href="/announcements">Pengumuman</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Kontak</TableCell>
                            <TableCell>
                                <a href="/contact">Informasi Kontak</a>, <br />
                                <a href="/feedback">Kirim Umpan Balik</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Galeri</TableCell>
                            <TableCell>
                                <a href="/galeri">Galeri Foto</a>, <br />
                                <a href="/videos">Video</a>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FAQ</TableCell>
                            <TableCell>
                                <a href="/faq">Pertanyaan yang Sering Diajukan</a>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}