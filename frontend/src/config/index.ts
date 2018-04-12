import devConfig from './dev';
import distConfig from './dist';

type DEV = typeof devConfig;
type DIST = typeof distConfig;

let config: DEV & DIST;

if (process.env.NODE_ENV === 'development') {
  config = devConfig;
} else {
  config = distConfig;
}

export default config;
