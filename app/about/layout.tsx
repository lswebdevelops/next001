export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About NavBar</nav>
      <main>{children}</main>
    </>
  );
}
