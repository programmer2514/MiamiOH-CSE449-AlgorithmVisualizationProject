import PageMeta from '../components/PageMeta';
import GettingStarted from '../components/pages/GettingStarted';

export default function Index() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Select an algorithm or create your own to begin learning."
      />
      <GettingStarted />
    </>
  );
}
