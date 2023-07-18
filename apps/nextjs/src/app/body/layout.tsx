// Layouts can be nested and composed
export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Dashboard</h1>
      {children}
    </section>
  );
}
