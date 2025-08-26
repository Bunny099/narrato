
export  function Home(){
    return <div className="min-h-screen w-full"> 
        <nav className="flex justify-between px-34 p-2 border-b border-gray-600 py-4">
            <h1 className="font-bold text-3xl font-sans">Narrato</h1>

            <div className="flex items-center gap-4">
                <h1 className="text-md">Sign in</h1>
                 <button className="bg-black text-white px-4 py-1 rounded-3xl hover:cursor-pointer">Get Started</button>
            </div>
           
        </nav>
        <section className="flex justify-between " >
            <div className="flex flex-col justify-center pl-34">
                <h1 className="text-8xl font-sans font-semibold line-clamp-2">Human</h1>
            <h1 className="text-8xl font-sans font-semibold">Stories & Ideas</h1>
            <div className="mt-4">
                <button className="bg-black text-white px-4 py-1 rounded-3xl hover:cursor-pointer">Start Reading</button>
            </div>
            
            </div>
            <div>
                <img src="/image1.webp" className="h-[560px] w-[400px]" alt="" />
            </div>
            
        </section>
        <div className="border-t border-gray-600 flex items-center justify-center">
            <h1 className="text-2xl">Narrato</h1>
        </div>
    </div>
}