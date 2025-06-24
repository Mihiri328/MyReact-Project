// src/pages/About.jsx
import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FlagIcon from '@mui/icons-material/Flag';

// Use image from public folder
const aboutImage = "/assets/About.png"; 

export default function About() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '90vh', padding: 20 }}
    >
      <Grid item xs={12} md={6}>
        <Paper elevation={3} 
               style={{ padding: 50,
                        backgroundColor: '#f3e5ab'
               }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our platform! We are dedicated to providing high-quality solutions
            to everyday problems using modern technology. Our team is passionate about innovation,
            efficiency, and user satisfaction.
          </Typography>
          <Typography variant="h6" gutterBottom>
           <StarIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
            Our Vision 
          </Typography>
          <Typography variant="body2" paragraph>
            To become a leading provider of smart digital services that improve people's lives.
          </Typography>
          <Typography variant="h6" gutterBottom>
             <FlagIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
             Our Mission
          </Typography>
          <Typography variant="body2">
            Deliver reliable, easy-to-use, and accessible tools that empower our users and foster growth.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src={aboutImage}
          alt="About us illustration"
          className='about-image'
          
        />
      </Grid>
    </Grid>
  );
}
