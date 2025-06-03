import type { Route } from './+types/home';
import { HelloWorld } from '../components/pages/hello-world/hello-world';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Hello World' },
    { name: 'description', content: 'Hello World!' },
  ];
}

export default function Hello() {
  return <HelloWorld />;
}
