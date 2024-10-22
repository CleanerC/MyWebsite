export default function Projects() {
    const projects = [
        {
            title: "demo",
            description: "aaaaa",
            technologies: ["aaa", "aaaa", "aaaaa"],
            link: "https://github.com/CleanerC/MyWebsite/tree/main/portfolio-website"
        },
        //TODO
    ]

    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8">My Project</h2>
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
                                         className="bg-gray-100 px-3 py-1 rounded-full text-sm"
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