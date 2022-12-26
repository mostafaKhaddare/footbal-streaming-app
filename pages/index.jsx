import Link from "next/link"
import { CardMatch } from "../components"
export default function Home() {
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4 ">
      <div className="LEFT text-center lg:col-span-2">
      <CardMatch/>
      <CardMatch/>
      <CardMatch/>
      <CardMatch/>
      <CardMatch/>
      </div>
      <div className=" bg-teal-300 h-10 ">
      <h4>
       left
       </h4>
      </div>
    </div>
    </>

  )
}
