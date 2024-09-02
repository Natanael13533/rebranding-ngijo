import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Berita() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/berita/'); // Replace with your API endpoint
                setData(response.data);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: 1500, height: '100%', maxHeight: 1500, gap: 2 }}>
            {data.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={item.image} // Fallback image
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#B22222' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description.length > 200 
                                ? `${item.description.slice(0, 200)}...` 
                                : item.description
                            }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/berita/${item.id}`} size="medium" >Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}
