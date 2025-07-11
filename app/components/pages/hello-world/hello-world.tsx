import { Button } from '@material-tailwind/react';

export function HelloWorld() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <p className="dark:text-white">Hello World!</p>
      <Button variant="outline" className="mt-4">Button</Button>
    </main>
  );
}
