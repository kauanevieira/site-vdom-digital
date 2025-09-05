export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
       {Array.from({ length: 30 }).map((_, index) => (
        <p key={index}>Este é o texto número {index + 1}</p>
      ))}
    </div>
  );
}