import Hero from './landing/hero';
import Services from './landing/services';
import TechStack from './landing/tech-stack';
import Showcase from './landing/showcase';

export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-[1400px] w-full mx-auto px-4 md:px-6 ">
      <Hero />
      <Services />
      <TechStack />
      <Showcase />
    </div>
  );
}
