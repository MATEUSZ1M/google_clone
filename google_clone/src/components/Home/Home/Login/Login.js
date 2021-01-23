import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";

const useStyles = makeStyles({
  root: {
    padding: 35,
    position: 'absolute',
    top: 70,
    right: 20,
    zIndex: 100,
  },
  avatar: {
    height: 70,
    width: 70,
    marginBottom: 20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    textTransform: 'capitalize'

  },
  logout: {
    width: '100%',
    textTransform: 'capitalize'

  },
  paragraf: {
    fontSize: 12,
    color: 'grey'
  }
});

export default function Login() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant='h5'>UserName</Typography>
        <Typography className={classes.paragraf}>useremail@gmail.com</Typography>
        <Button className={classes.button} variant="outlined">
          Manage your account
        </Button>
        <Button className={classes.logout} variant="outlined">Logg out</Button>
      </CardContent>
    </Card>
  );
}
