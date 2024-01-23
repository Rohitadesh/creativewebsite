import Link from "next/link"
export default function Navbar (){

    return(
        <div className="h-[12%]  w-full border border-green-500 flex flex-wrap flex-row justify-end items-center gap-32">
            <div className="md:h-full w-[30%]  flex flex-wrap justify-center items-center gap-24">
             Image
            </div>
            <div className="md:h-[50%] w-[60%] flex flex-wrap justify-center items-center gap-24">
                <Link href='/'>Home</Link>
                <Link href='/products'>products</Link>
                <Link href='/cart'>Carts</Link>
                <Link href='/Vip'>VIP</Link>
                <Link href='/sign'>Signin</Link>
            </div>
        </div>  
    )

}