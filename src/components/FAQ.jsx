import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Daftar Informasi Setiap Saat
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Cek Pembayaran PBB
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              diantara kemudahan layanan pajak bumi dan bangunan, Bapenda kota semarang jawa tengah juga memberikan kemudahan dalam mengecek tagihan pbb secara online di situs resminya yaitu e pbb kota semarang. hal ini akan memberikan kemudahan bagi warga dalam mengatur keuangan karena telah mengetahui terlebih dahulu berapa biaya yang harus dipersiapkan dalam pembayaran pbb sehingga memudahkan dalam alokasi dana. untuk dapat cek pbb online semarang diharuskan memasukkan nomor NOP rumah dimana tertera di lembar surat sppt pbb yang telah dibagikan sebelumnya sebanyak 18 digit angka. langkah cara cek pajak pbb online
              <Link onClick={() => window.location.href = "https://cepoko.semarangkota.go.id/informasisosialmedia" } sx={{color:'red'}}> Klik Disini </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Cek Pembuatan KTP 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Kepala Dinas Kependudukan dan Catatan Sipil (Dispendukcapil) Kota Semarang melaunching layanan e-service dan Penandatanganan Perjanjian Kerjasama Pemanfaatan Data Kependudukan di Kantor Dispendukcapil, Rabu (9/11). Layanan tersebut meliputi pembuatan akta kelahiran, kematian dan Pemanfaatan Data Kependudukan.
              <Link onClick={() => window.location.href = "https://cepoko.semarangkota.go.id/informasisosialmedia" } sx={{color:'red'}}> Klik Disini </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Lapor Hendi
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Selangkah lebih maju dengan kota-kota lain di Jawa Tengah, Pemerintah Kota Semarang mempunyai layanan pemerintah pusat bernama Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!) dengan fungsi untuk melaporkan segala keluh kesah warga masyarakat Kota Semarang tanpa ada perantara antara rakyat dengan Walikota.
              <Link onClick={() => window.location.href = "https://cepoko.semarangkota.go.id/informasisosialmedia" } sx={{color:'red'}}> Klik Disini </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Smart Infrastruktur Pekerjaan Umum (SIPU)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Terwujudnya infrastruktur Dinas Pekerjaan Umum Kota Semarang serta pengendalian tata ruang yang berkelanjutan guna mendukung Kota Semarang menjadi kota yang bersih, tertib dan maju.  Maka untuk mempermudah perawatan dan pembangunan Infrastruktur Kota maka Dinas PU mengeluarkan Aplikasi untuk mempermudah pelaporan warga masyarakat melaporkan kejadian dan kerusakan yang dialami di lingkungannya tanpa harus membuat proposan dan sebagainya. Untuk itu diharapkan warga masyarakat dapat mendownload applikasi tersebut di
              <Link onClick={() => window.location.href = "https://cepoko.semarangkota.go.id/informasisosialmedia" } sx={{color:'red'}}> Klik Disini </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
