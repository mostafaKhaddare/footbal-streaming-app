import Link from 'next/Link'

function NavList({data , className}) {
  return (
    <>
        <li className={className}>
            <Link  href={data.link}> {data.name} </Link>
        </li>
    </>
  )
}

export default NavList