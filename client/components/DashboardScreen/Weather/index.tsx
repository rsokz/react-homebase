import * as React from 'react';
import { useState } from 'react';
import { Query } from 'react-apollo';
import Lottie from 'react-lottie';
// hooks
import useLocation from '../hooks/useLocation';
// graphql
import * as Type from '../../../graphql/types';
import * as query from '../../../graphql/queries';
// components
import WeatherDisplay from './WeatherDisplay';

const loaderData = require('./weather-loader.json');

export default () => {
  const [coords, errMessage] = useLocation();
  const [isLoaderStopped, setIsLoaderStopped] = useState(false);

  return coords ? (
    <Query<Type.Weather.Data, Type.Weather.Variables>
      query={query.weather}
      variables={{ lat: coords.latitude, long: coords.longitude }}
    >
      {({ data: { weather }, loading }) => {
        setIsLoaderStopped(true);
        if (loading) return <div style={{ height: 135 }} />;
        return <WeatherDisplay weather={weather} />;
      }}
    </Query>
  ) : (
    <div style={{ height: 135 }}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loaderData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        isClickToPauseDisabled={true}
        height={100}
        width={100}
        isStopped={isLoaderStopped}
      />
    </div>
  );
};
