import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DistributorCard from './components/DistributorCard';
import mockData from './data/mockData';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Augur Dashboard
      </Typography>
      <Grid container spacing={3}>
        {mockData.map(distributor => (
          <Grid item xs={12} sm={6} md={4} key={distributor.name}>
            <DistributorCard distributor={distributor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
