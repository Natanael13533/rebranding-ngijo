import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function SmartCityInfo() {
  return (
    <Box
      id="smartcity"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            SEMARANG SMART CITY
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Smart city adalah konsep kota cerdas yang dirancang guna membantu berbagai hal kegiatan masyarakat, terutama dalam upaya mengelola sumber daya yang ada dengan efisien, serta memberikan kemudahan mengakses informasi kepada masyarakat, hingga untuk mengantisipasi kejadian yang tak terduga sebelumnya.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Dikutip dari laman smartcityindonesia.org, sebuah kota dikatakan Smart apabila kota tersebut benar-benar dapat mengetahui keadaan kota di dalamnya, memahami permasalahan tersebut secara lebih mendalam, hingga mampu melakukan aksi terhadap permasalahan tersebut.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Sedangkan dalam buku Pengenalan dan Pengembangan Smart City, kota cerdas didefinisikan sebagai sebuah konsep pengembangan dan pengelolaan kota dengan pemanfaatan Teknologi Informasi dan Komunikasi (TIK) untuk menghubungkan, memonitor, dan mengendalikan berbagai sumber daya yang ada di dalam kota dengan lebih efektif dan efisien untuk memaksimalkan pelayanan kepada warganya serta mendukung pembangunan yang berkelanjutan.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Berdasarkan definisi tersebut, ada beberapa hal yang dapat kita garis bawahi berkaitan dengan smart city.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Pertama, yaitu sebuah konsep yang diterapkan oleh sistem pemerintahan daerah dalam mengelola masyarakat perkotaan.
            <br />
            Kedua, mensyaratkan pengelolaan daerah terhadap segala sumber daya dengan efektif dan efisien.
            <br />
            Ketiga, smart city diharapkan mampu menjalankan fungsi penyedia informasi secara tepat kepada masyarakat dan mampu mengantisipasi kejadian yang tak terduga.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Smart city berarti kota cerdas. Saat kita mengatakan suatu kota adalah kota yang cerdas, sebenarnya adalah sebuah majas personifikasi yang mengumpamakan kota seperti manusia seakan kota dapat merasakan, berpikir dan bertindak terhadap kondisi internal dan eksternal dari kota tersebut.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            <strong>Aspek utama Smart City</strong>
            <br />
            Pada tahun 2014, Frost & Sullivan mengidentifikasi 8 aspek utama dari penerapan smart city, yaitu smart governance, smart infrastructure, smart technology, smart mobility, smart healthcare, smart energy, smart building, dan smart citizen.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            <strong>Tujuan Smart City</strong>
            <br />
            Tujuan utama dari diadakannya smart city antara lain untuk membentuk suatu kota yang aman dan nyaman bagi warga serta untuk memperkuat daya saing kota dalam hal perekonomian. Sehingga dapat dijelaskan bahwa tujuan pelaksanaan smart city dapat dibagi menjadi 3 agenda utama, yaitu untuk menunjang kota di dalam dimensi sosial (keamanan), ekonomi (daya saing), dan lingkungan (kenyamanan).
            <br />
            Atau lebih umum dikutip dari laman United Nation, dapat dikatakan bahwa tujuan smart city adalah untuk membentuk kota yang Sustainable (ekonomi, sosial, lingkungan).
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 2 }}>
            Untuk lebih jelasnya, silahkan klik 
            <a href="https://semarangsmmartcity" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'red'}}>
                Semarang Smartcity
              </Typography>
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}