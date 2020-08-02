import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Is Even</title>
      </Head>
      <h1>Is Even</h1>
      <p>Your one-stop shop for all things &ldquo;even&rdquo;</p>
      <form className="flex w-full max-w-5xl text-3xl mt-10 mb-12 rounded-full">
        <input type="number" className="flex-1 transition ease-out duration-200 appearance-none border-4 rounded-l-full w-full py-5 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="2, 3, 4, etc&hellip;" />
        <button className="rounded-r-full py-5 px-10 bg-purple-700 text-white" type="submit">Tell me!</button>
      </form>
      <a className="italic text-blue-500 active:text-blue-800 underline" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Companion product isOdd coming soon! Follow our blog for the latest updates.</a>
      <style jsx>{`
        form:focus-within {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }
      `}</style>
    </div>
  )
}
