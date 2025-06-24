// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
const contactImage = "/assets/ContactUs.png";

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Grid container 
          spacing={2}
          justifyContent="center" 
          alignItems="center"
          style={{ minHeight: '90vh', padding: 20 }}>
          
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 30 }}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            style={{ marginTop: 16 }}
          >
            Send Message
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src={contactImage}
          alt="Contact illustration"
          style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}
