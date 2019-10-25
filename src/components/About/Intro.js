import React from "react";
import Container from '@material-ui/core/Container'

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  greeting: {
    textAlign: "left",
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    margin: 10
  },
  biggerAvatar: {
    margin: 10,
    width: 95,
    height: 95
  }
});

const Intro = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={1} className={classes.greeting}>
        <Grid item xs={4}>
          <Avatar alt="BEB" src="/pic.png" className={classes.biggerAvatar} />
        </Grid>
        <Grid item xs={8}>
          <h1>Hi! I'm Bryan.</h1>
        </Grid>
      </Grid>

      <h2>What can I do for you?</h2>
      <h3>
        I'm an enterprise solutions architect and software engineer, most
        recently focused on working with early stage startups to help them solve
        complex problems and deliver extraordinary products. I have the
        experience and know-how to balance the needs of a broad range of
        business goals and constraints and to deliver cost effective, scaleable
        and secure solutions.
      </h3>
      {/* <h3>
          I've worked with broad spectrum of companies at various maturity levels, I
          have an learned sense of what's needed for success at each step in a
          companies journy. work across a varying range of scale and complexity.
        </h3> */}
      <h3>
        I've been fortunate to be a part of some amazing companies, worked with
        amazing people, and I've done some amazing work.
      </h3>
      <h3>
        Professionally, my greatest joy comes from continuously innovating,
        working with peers that have a shared sense of purpose and immediacy,
        and, at the end of the day, shipping.
      </h3>
      <h3>
        And like nearly every other person on planet Earth I like to have fun,
        chillax at the end of a hard day and enjoy every exiciting moment the
        universe has to offer.
      </h3>
      {/* 
      <p>
        “When something is important enough, you do it even if the odds are not
        in your favour.” ― Elon Musk
      </p>
 */}
    </Container>
  );
};

export default Intro;
