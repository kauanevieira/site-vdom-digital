import { Button } from "@/app/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[450px]">
      <h1 className="font-black text-6xl">Solucoes Digitais para o seu Negocios</h1>
      <h2 className="text-muted-foreground w3/4">Impulsione sua presenca digital online com nossos servicoes profissionais</h2>
      <Button size="lg">Saiba mais</Button>
    </div>
  )
}