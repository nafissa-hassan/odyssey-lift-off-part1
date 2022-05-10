import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from "../containers/track-card";
import QueryResult from '../components/query-result';

const TRACKS = gql`
    query getTracks {
        tracksForHome {
            id
            title
            author {
                name
                photo
                id
            }
            thumbnail
            length
            modulesCount
        }
    }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const { loading, error, data } = useQuery(TRACKS);

  return (
        <Layout grid>
            <QueryResult loading={loading} data={data} error={error}>
                {data?.tracksForHome?.map((track) =>
                    <TrackCard key={track.id} track={track} />
                )}
            </QueryResult>
        </Layout>
  );
};

export default Tracks;
