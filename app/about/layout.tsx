export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-24 w-full bg-blue-900">
      <div className="text-white text-2xl">{children}</div>
    </div>
  );
}
