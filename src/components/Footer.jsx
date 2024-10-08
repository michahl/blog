import { FaXTwitter, FaGithub } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-50/20 py-6 text-xs">
        <div className='flex flex-row justify-between items-center text-gray-600 dark:text-gray-400'>
            <p>© Copyright {new Date().getFullYear()} — michahl</p>

            <div className="flex flex-row items-center gap-3">
                <a href="https://github.com/michahl" target="_blank" className="hover:text-gray-800 dark:hover:text-gray-200">
                    <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://x.com/cht5m" target="_blank" className="hover:text-gray-800 dark:hover:text-gray-200">
                    <FaXTwitter className="w-4 h-4" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer