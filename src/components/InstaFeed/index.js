import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import api from '~/services/api';

import { Container, Grid, GridItem } from './styles';

export default function InstaFeed() {
  window.scroll(0, 0);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('louvartvidracaria/?__a=1');

      setPosts(response.data.graphql.user.edge_owner_to_timeline_media.edges);
      setLoading(false);
    }

    getPosts();
  }, []);

  return (
    <Container loading={loading}>
      <h1>Confira nossos últimos trabalhos</h1>
      {loading ? (
        <ReactLoading type="spin" color="#1034a6" height="50px" width="50px" />
      ) : (
        <Grid>
          {posts.map(post => (
            <GridItem key={post.node.id}>
              <img src={post.node.thumbnail_src} alt="post" />
            </GridItem>
          ))}
        </Grid>
      )}
    </Container>
  );
}
