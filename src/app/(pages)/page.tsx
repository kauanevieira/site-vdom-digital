export default function Page() {
  return (
    <div className="flex flex-col gap-4 max-w-[1400px] w-full mx-auto px-4 md:px-6">
       {Array.from({ length: 30 }).map((_, index) => (
        <p key={index}>Este é o texto número {index + 1}</p>
      ))}
    </div>
  );
}