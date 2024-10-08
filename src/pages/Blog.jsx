import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

import { blog } from "../assets"

const Blog = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0'>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow mt-20">
              <div className='mb-3'>
                <h2 className='text-2xl w-full font-semibold'>Recent posts</h2>
                <div className='flex flex-col mt-5'>
                  {
                    blog.map((post) => (
                      <div key={post.title} className='text-sm flex flex-col gap-4 pb-5'>
                        <div className='flex flex-col gap-1.5'>
                          <div className="flex flex-row gap-4 items-center">
                            <p className="text-gray-500 dark:text-gray-400/65 font-light">{post.date}</p>
                            <div className="flex flex-row gap-1">
                              {
                                post.tags.map((tag) => (
                                  <a 
                                    key={tag}
                                    href={`/tags/${tag}`}
                                    className="border rounded-full py-0.5 px-2 text-xs hover:bg-gray-100/35 dark:hover:bg-zinc-800/50 dark:border-gray-50/20 dark:text-white/60 dark:hover:text-white/85"
                                  >
                                    {tag}</a>
                                ))
                              }
                            </div>
                          </div>
                          <a href={`blog/${post.url}`}>
                            <h3 className="font-medium text-lg hover:underline">{post.title}</h3>
                          </a>
                          <p className='text-gray-600/80 dark:text-gray-200/60 font-light'>{post.shortDes}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Newsletter />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog