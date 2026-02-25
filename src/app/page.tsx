import { Metadata } from 'next';
import Hero from './Hero';

export const metadata: Metadata = {
  title: 'OpenClaw - Your Personal AI Assistant',
  description: 'Private, powerful, and running on your terms. Connect to any LLM and reach it anywhere.',
};

export default function Home() {
  return <Hero />;
}
