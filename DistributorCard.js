import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function DistributorCard({ distributor }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{distributor.name}</Typography>
        <Typography variant="body2">
          Last Month: {distributor.lastMonth} units
        </Typography>
        <Typography variant="body2">
          Forecast: {distributor.forecast} units
        </Typography>
        <Typography variant="body2">
          YTD Average: {distributor.ytdAverage} units
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DistributorCard;
