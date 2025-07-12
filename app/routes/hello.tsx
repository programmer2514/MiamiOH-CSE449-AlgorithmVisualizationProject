import type { Route } from '../+types/root';
import HelloWorld from '../components/pages/HelloWorld/HelloWorld';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Hello World' },
    { name: 'description', content: 'Hello World!' },
  ];
}

export default function Hello() {
  return <HelloWorld />;
}
