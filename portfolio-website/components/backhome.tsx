import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BackToHome() {
    return (
        <Link
         href="/"
         className="fixed top-4 left-4 inline-flex items-center px-4 py-2 rounded-lg
                 bg-white dark:bg-gray-800 
                 text-gray-900 dark:text-gray-100
                 shadow-md hover:shadow-lg
                 transform hover:scale-105
                 transition-all duration-200
                 border border-gray-200 dark:border-gray-700"
         >
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Back To Home
         </Link>
    )
}