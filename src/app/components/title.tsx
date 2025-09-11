export interface TitleProps {
  text: string;
  subtitle?: string;
  className?: string;
}

export function Title({ text, subtitle, className }: TitleProps) {
  return (
    <div className={`flex justify-center items-baseline gap-4 ${className}`}>
      <h3 className="text-3xl text-muted-foreground font-black">{text}</h3>
      {subtitle && (
        <h4 className="text-secondary text-lg">{subtitle}</h4>
      )}
    </div>
  );
}