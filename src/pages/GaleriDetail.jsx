import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, CardMedia, Hidden, Typography } from '@mui/material';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function GaleriDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        async function fetchItem() {
            try {
                const response = await axios.get(`/api/galeri/${id}`);
                setItem(response.data);
            } 
            catch (error) {
                console.error('Error fetching item:', error);
            }
        }
        fetchItem();
    }, [id]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!item) {
        // Optionally return a loading indicator or a placeholder
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', width: '100%', maxWidth: 1500, height: '100%', maxHeight: 1500, margin: 'auto', padding: 2 }}>
            <Card sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ width: 500, marginBottom: 5 }}>
                    <Slider {...settings}>
                        {item.images.map((image, index) => (
                            <CardMedia
                                key={index}
                                component="img"
                                sx={{height: 'auto', objectFit: 'cover' }}
                                image={image.image}
                                title={item.title}
                            />
                        ))}
                    </Slider>
                </Box>
                <Box sx={{ flex: 1, padding: 2 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ color: '#B22222' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            {item.description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}