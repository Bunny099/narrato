


export function Button({text,onButtonClick}:{text:string,onButtonClick?:()=>void}){
    return <button onClick={onButtonClick} className="bg-gray-900 hover:bg-gray-950 text-white px-6 py-2 rounded-3xl hover:cursor-pointer">{text}</button>
}