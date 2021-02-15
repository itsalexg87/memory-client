import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

//MUI
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './homeStyles';

// components
import Form from '../Form/form';
import Posts from '../Posts/posts';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
          className={classes.mainContainer}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
