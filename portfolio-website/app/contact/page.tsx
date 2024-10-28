import BackToHome from "@/components/backhome";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function contact() {
    return (
        <div className="min-h-screen p-8">
          <BackToHome />
          
          <div className="text-center max-w-2xl mx-auto mt-12 mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out! I'm always open to discussing new projects and opportunities.
            </p>
          </div>
    
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <a href="mailto:xjw031201@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                      xjw031201@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">+1 (203) 819-6187</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">Hamden, CT</span>
                  </div>
                </div>
              </div>
    
              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/CleanerC" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/jiawei-xiang-021a6b231/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
    
            <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
    
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-gray-100
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-colors"
                  placeholder="I does not have back end. So, this is not functional"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700
                         transform hover:scale-[1.02] transition-all duration-200
                         shadow-md hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         dark:focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
}

