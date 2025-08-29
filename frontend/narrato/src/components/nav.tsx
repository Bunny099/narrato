

export function Navbar({openModal}:{openModal:()=>void}){
    return <nav className="flex bg-amber-50 items-center py-4 justify-between px-6 md:px-22 border-b border-gray-600">
        <h1 className="text-3xl font-semibold">Narrato</h1>
        <div className="flex items-center gap-4">
           <h1 className="hidden md:block hover:cursor-pointer">Sign In</h1>
         <button onClick={openModal} className="bg-gray-900 hover:bg-gray-950 text-white px-6 py-2 rounded-3xl hover:cursor-pointer">Get started</button>
        </div>
    </nav>
}