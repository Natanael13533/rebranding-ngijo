import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Markdown from './Markdown';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://picsum.photos/1100/350',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

// TODO remove, this demo shouldn't need to reset the theme.

export default function BeritaBlog() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

      useEffect(() => {
        async function fetchItem() {
            try {
                const response = await axios.get(`/api/berita/${id}`);
                setItem(response.data);
            } 
            catch (error) {
                console.error('Error fetching item:', error);
            }
        }
        fetchItem();
    }, [id]);

      if (!item) return <Typography>Loading...</Typography>;

    const dateStr = item.created_at;
    const date = new Date(dateStr);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    
    const formattedDate = `${day}-${month}-${year}`; // dd-mm-yyyy format

    const sidebar = {
    social: [
        { name: formattedDate, icon: PushPinIcon },
        { name: 'natan', icon: PersonIcon },
    ],
    };

    return (
        <>
        <CssBaseline />
            <Container maxWidth="lg">
                <main>
                <Paper
                    sx={{
                        position: 'sticky',
                        backgroundColor: 'grey.800',
                        color: '#fff',
                        mb: 2,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat !important',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${item.image})`,
                    }}
                >
                    {/* Fallback for when the image is missing */}
                    {item?.image ? (
                        <img src={item.image} alt={item.title} />
                    ) : (
                        <Typography>No image available</Typography>
                    )}
                </Paper>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                '& .markdown': {
                                py: 3,
                                },
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                {item.title}
                            </Typography>
                            <Divider />
                                <Markdown className="markdown" key={item.description.substring(0, 40)}>
                                    {item.description}
                                </Markdown>
                        </Grid>
                        {/* <Main title="From the firehose" posts={posts} /> */}
                        <Sidebar
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
        </>
    );
}