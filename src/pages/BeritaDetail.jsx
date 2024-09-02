import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BeritaDetail() {
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

    return (
        <Box sx={{ display: 'flex', width: '100%', maxWidth: 1500, height: '100%', maxHeight: 1500, margin: 'auto', padding: 2 }}>
            <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 400, height: 'auto', objectFit: 'cover' }}
                    image={item.image}
                    title={item.title}
                />
                <Box sx={{ flex: 1, padding: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{ color: '#B22222' }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        {item.description.length > 200 
                            ? `${item.description.slice(0, 200)}...` 
                            : item.description
                        }
                    </Typography>
                </CardContent>
                </Box>
            </Card>
        </Box>
    );
}
