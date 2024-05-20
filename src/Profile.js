import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <Typography variant="h6">Please log in to see your profile.</Typography>
    );
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.picture}
        alt={user.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
