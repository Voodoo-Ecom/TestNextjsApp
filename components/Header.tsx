import Link from "next/link";

export default function Header() {

  return (
    <header className="fixed w-full bg-[#4d64da] top-0 py-4">
        <div className="container text-white font-semibold text-[20px]">
          <Link href={"/"}>
            UserINFO
          </Link>
        </div>
    </header>
  )
}
