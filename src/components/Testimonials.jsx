import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
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
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Informasi Sosial Media
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Untuk mengetahui segala kegiatan dan aktivitas kami
        </Typography>
        <Typography variant="body1" color="text.secondary">
          kunjungi kami di INSTAGRAM dan FACEBOOK
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <a href="https://www.facebook.com/">https://www.facebook.com/</a>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Silahkan kunjungi akun kami di Instagram kelurahan CEPOKO. Terimakasih
        </Typography>
      </Box>
    </Container>
  );
}
