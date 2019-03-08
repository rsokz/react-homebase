import * as React from 'react';
import Lottie from 'react-lottie';
import { Query } from 'react-apollo';
import { List, Paper, Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';
import * as Type from '../../../graphql/types';
import * as query from '../../../graphql/queries';
import images from './images';
// components
import Post from './Post';
const loaderData = require('./PHLoader.json');

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '600px',
      height: '75%'
    },
    list: {
      ...theme.mixins.gutters(),
      maxHeight: '88%',
      overflow: 'auto'
    },
    loader: {
      display: 'flex',
      height: '85%',
      alignItems: 'center'
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <a href="https://www.producthunt.com/" target="_blank">
        <img src={images.productHunt} alt="product-hunt-logo" width="209" height="75" />
      </a>
      <List className={classes.list}>
        <Query<Type.ProductHunt.Data> query={query.productHunt}>
          {({ data: { products }, loading }) => {
            if (loading)
              return (
                <div className={classes.loader}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: loaderData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }}
                    height={200}
                    width={200}
                    isStopped={!loading}
                  />
                </div>
              );
            return products.posts.map(post => {
              return <Post post={post} />;
            });
          }}
        </Query>
      </List>
    </Paper>
  );
});
function newFunction(post: Type.ProductHunt.Post) {
  return console.log(post);
}
