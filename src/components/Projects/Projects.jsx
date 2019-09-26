import React from 'react';


import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    flex: '1 0 auto',
  },
  card: {
    // minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 400,
    // paddingTop: '56.25%', // 16:9
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1>A few of my favorites...</h1>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <p>This is some sample text...</p>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <CardMedia className={classes.media}>
                  <img src='https://picsum.photos/300/400?blur' alt="picsum" />
                </CardMedia>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
            <Grid item xs={4}>
                <CardMedia className={classes.media}>
                  <img src='https://picsum.photos/300/400?blur' alt="picsum" />
                </CardMedia>
              </Grid>
              <Grid item xs>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <p>This is some sample text...</p>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>


    </Container>
  );
}


export default Projects;



// <Grid container spacing={3}>
// <Grid item xs>
//   <Typography className={classes.title} color="textSecondary" gutterBottom>
//     <p>This is some sample text...</p>
//   </Typography>
// </Grid>
// <Grid item xs>
//   <CardMedia
//     src="https://picsum.photos/300/400?blur"
//   />
// </Grid>
// </Grid>