import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    flexBasis: '90%',
    flexShrink: 0,
  },
}));

const Blog = (props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let articles = props.articles.map((a, idx) => {
    return (
      <div key={idx}>
        <ExpansionPanel expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}bh-content`}
            id={`panel${idx}bh-header`}
          >
            <Typography className={classes.heading}>{a.title}</Typography>
            {/* <Typography className={classes.secondaryHeading}>{a.title} 2 </Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {a.body}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  })

  return (
    <Container className={classes.root}>
      {articles}
    </Container>
  )
}

export default Blog;