import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl">Comming Soon...</h1>

        <Link href={"/"} className="hover:border p-4 rounded-2xl">Retrun to home page</Link>
      </div>
    </div>
  );
}
