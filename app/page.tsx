import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.JS</h1>
      <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
    </main>
  );
}
