import { useEffect, useState } from "react"
import axios from "axios"



type Blog = { title: string, blog: string }
export function Dashboard() {

    const [title, setTitle] = useState<string>("");
    const [blog, setBlog] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [getBlog, setGetBlog] = useState<Blog[]>([]);

    async function addBlog(e: React.FormEvent) {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:3001/blog", { title, blog });
            if (!response.data) {
                console.error("something wrong with credential")
            }
            setMessage("blog created successfully!")
            setBlog("")
            setTitle("")

            getBlogFun()
        } catch (err) {
            console.error("wrong with the sever", err)
        }


    }

    async function getBlogFun() {
        try {

            const response = await axios.get("http://localhost:3001/blog");
            if (!response.data) {
                console.log("No data found!")
            } else {
                setGetBlog(response.data.blogs)
                console.log(response.data)
            }
        } catch (err) {
            console.error(err)
        }

    }
    useEffect(() => {
        getBlogFun()
    }, [])

    return <div className="min-h-screen w-full flex flex-col p-4 ">

        <h1 className="text-3xl mt-4 font-semibold font-sans text-center">Write your Journey </h1>

        <form onSubmit={(e) => addBlog(e)} className="flex flex-col space-y-4 mx-40 mt-4">


            <input
                onChange={(e) => setTitle(e.target.value)} value={title}
                type="text"
                placeholder="Title"
                className="w-full  text-4xl font-semibold mb-6 focus:outline-none placeholder-gray-300"
            />

            <textarea
                onChange={(e) => setBlog(e.target.value)} value={blog}
                placeholder="Tell your story..."
                className="w-full  text-xl font-serif focus:outline-none resize-none leading-relaxed placeholder-gray-400"
                rows={12}
            />
            <div>
                 <button className="px-8 font-semibold hover:cursor-pointer py-2 rounded-2xl bg-black text-white" type="submit">Add</button>
            </div>
           
            {message && <p className="text-2xl text-green-800">{message}</p>}
        </form>

        <div className=" p-4 px-18 mt-6">
            <h1 className="text-2xl font-bold font-sans mt-4 ">Your Thoughts </h1>
            {getBlog.map((b, i) =>
                <div key={i} className="prose prose-lg max-w-none  p-2 py-4 my-2 rounded-lg">
                    <h1 className="text-2xl font-semibold leading-relaxed font-sans ">{b.title}</h1>
                    <p className="font-sans text-xl line-clamp-2 text-gray-600">{b.blog}</p>
                </div>
            )}
        </div>


    </div>
}