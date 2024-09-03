import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const logoStyle = {
  width: '150px', // Increased width
  height: 'auto',
  cursor: 'pointer',
};

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        backgroundColor: 'red',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          py: { xs: 4, sm: 8 },
        }}
      >
        <Stack
          direction="row"
          spacing={6} // Increased spacing between images
          sx={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Link href="https://semarangkota.go.id/">
            <img
              src={`${process.env.PUBLIC_URL}/semarang1.png`}
              style={logoStyle}
              alt="Link 1"
            />
          </Link>
          <Link href="https://smartcity.semarangkota.go.id/">
            <img
              src={`${process.env.PUBLIC_URL}/semarang2.png`}
              style={logoStyle}
              alt="Link 2"
            />
          </Link>
          <Link href="https://data.semarangkota.go.id/">
            <img
              src={`${process.env.PUBLIC_URL}/semarang3.png`}
              style={logoStyle}
              alt="Link 3"
            />
          </Link>
          <Link href="https://ppid.semarangkota.go.id/">
            <img
              src={`${process.env.PUBLIC_URL}/semarang4.png`}
              style={logoStyle}
              alt="Link 4"
            />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
