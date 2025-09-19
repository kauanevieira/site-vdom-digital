import { Title } from '../components/title';
import Hero from './landing/hero';

export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-[1400px] w-full mx-auto px-4 md:px-6">
      <Hero />
      <Title
        text="Novos Recursos"
        subtitle="Impulsione sua presenca digital online com nossos servicoes profissionaise"
      />
    </div>
  );
}
