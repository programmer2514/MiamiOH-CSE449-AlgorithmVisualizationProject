import type { Config } from '@react-router/dev/config';
import Routes from './app/routes';

export default {
  ssr: false,
  async prerender() {
    return Routes.map(route => `/${route.path ?? ''}`);
  },
} satisfies Config;
