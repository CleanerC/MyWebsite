import BackToHome from "@/components/backhome";

export default function Projects() {
    const projects = [
        {
            title: "Inode Based User Space Filesystem API",
            description: "a very simplified version of inode based filesystem",
            technologies: ["C", "Inode", "File descriptor"],
            link: "https://github.com/CleanerC/OSLearning/tree/main/FileSystem"
        },
        {
            title: "RSP480",
            description: "Traffic light simulator",
            technologies: ["Micro controller", "C/C++"],
            link: " "  
        },
        {
            title: "IO Throttling for FUSE passthrough filesystem",
            description: "IO throttling on a passthrough filesystem using Tokenbucket algorithm",
            technologies: ["C++", "thread management"],
            link: "https://github.com/EC528-Fall-2024/container-native-fs-interposer/tree/main/cpp_hp_fuse"
        }, 
        {
            title: "Ordering Website Simulation",
            description: "A simulation of how website deals with ordering request and store data, and log system",
            technologies: ["HTML/CSS", "JS", "Python(Flask)", "SQLite", "logging"],
            link: " "

        },


        //TODO
    ]

    return (
        <div className="min-h-screen p-8">
            <BackToHome/>
            <div className="text-center max-w-2xl mx-auto mt-12 mb-16">
                <h2 className="text-4xl font-bold">My Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {
                                    project.technologies.map((tech, i) => (
                                        <span
                                         key={i}
                                         className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                            <a href={project.link}
                             className="text-blue-500 hover:underline"
                             target="_blank"
                             rel="noopener nonereferrer">
                            view Project →
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}