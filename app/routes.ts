import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('run', 'routes/run.tsx'),
  route('wiki', 'routes/wiki.tsx'),
] satisfies RouteConfig;
