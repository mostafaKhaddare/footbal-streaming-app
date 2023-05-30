
function NavList({data , className}) {
  return (
    <>
        <li className={className}>
            <a  href={data.link}> {data.name}</a>
        </li>
    </>
  )
}

export default NavList