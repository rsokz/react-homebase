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

export default () => {
  const [coords, errMessage] = useLocation();
  const [isLoaderStopped, setIsLoaderStopped] = useState(false);

  const loader = () => {
    console.log('coords', coords);
    return (
      <div style={{ height: 92, width: 0 }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require('./weather-loader.json'),
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          isClickToPauseDisabled={true}
          height={85}
          width={85}
          isStopped={isLoaderStopped}
        />
      </div>
    );
  };

  return coords ? (
    <Query<Type.Weather.Data, Type.Weather.Variables>
      query={query.weather}
      variables={{ lat: coords.latitude, long: coords.longitude }}
    >
      {({ data: { weather }, loading }) => {
        console.log('here');
        setIsLoaderStopped(true);
        if (loading) {
          return loader();
        }
        return <WeatherDisplay weather={weather} />;
      }}
    </Query>
  ) : (
    loader()
  );
};
