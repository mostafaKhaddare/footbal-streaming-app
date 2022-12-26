import Link from "next/Link"
function Navbar() {
  return (
    <nav className="bg-cyan-500	">
      <div className="container mx-auto px-6">
      <div className="flex items-center  justify-between md:h-16 sm:h-8 lg:h-16">
        <div className="flex items-center">
          <Link href="/" className="font-semibold text-xl tracking-tight text-white">
            beinfoot
          </Link>
        </div>
        <ul className="hidden sm:ml-6 sm:flex" >
          <li>
          <Link href="/about"  className="inline-block px-4 py-2 leading-none text-sm text-white rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              About
          </Link>
          </li>
          <li>
          <Link href="/about"  className="inline-block px-4 py-2 leading-none text-sm text-white rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              About
          </Link>
          </li>
          <li>
          <Link href="/about"  className="inline-block px-4 py-2 leading-none text-sm text-white rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              About
          </Link>
          </li>
          <li>
          <Link href="/about"  className="inline-block px-4 py-2 leading-none text-sm text-white rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              About
          </Link>
          </li>
        </ul>
        <div className="-mr-2 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
  </nav>

  )
}

export default Navbar
