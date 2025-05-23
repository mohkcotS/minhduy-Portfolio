import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center">Feature projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Project  */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                    <h3 className="text-xl fonr-bold mb-2">Fishing Game</h3>
                    <p className="text-gray-400 mb-4">The 2D java game in OOP course about fishing take inspiration from Happy Farm game</p>
                    <div className="flex flex-wrap gap-2 mb-4 ">
                        {["Java"].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/mohkcotS/Project_OOP_FishingGame" 
                                className="text-blue-300 hover:text-blue-200 transition-colors my-4">View Project → </a>
                    </div>
                </div>
                {/* End */}

                {/* Project  */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                    <h3 className="text-xl fonr-bold mb-2">Battle Ship Game</h3>
                    <p className="text-gray-400 mb-4">My first individual project for my final project evaluation of DSA course </p>
                    <div className="flex flex-wrap gap-2 mb-4 ">
                        {["Java"].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/mohkcotS/Project_DSA_Battleship" 
                                className="text-blue-300 hover:text-blue-200 transition-colors my-4">View Project → </a>
                    </div>
                </div>
                {/* End */}
                {/* Project  */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                    <h3 className="text-xl fonr-bold mb-2">Library Management System</h3>
                    <p className="text-gray-400 mb-4">A system that enables librarians to easily add, edit, and delete book records</p>
                    <div className="flex flex-wrap gap-2 mb-4 ">
                        {["React","TypeScript","Tailwind CSS","Java","Springboot","PostgreSQL","RESTful API"].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/mohkcotS/Project_DSA_Battleship" 
                                className="text-blue-300 hover:text-blue-200 transition-colors my-4">View Project → </a>
                    </div>
                </div>
                {/* End */}
                {/* Project  */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                    <h3 className="text-xl fonr-bold mb-2">Restaurant Management System</h3>
                    <p className="text-gray-400 mb-4">A Restaurant Management System that streamlines the ordering, kitchen processing, and payment workflow designed to support daily restaurant operations efficiently.</p>
                    <div className="flex flex-wrap gap-2 mb-4 ">
                        {["React","JavaScript","Tailwind CSS","Node.js","Express.js","MySQL","RESTful API","JWT","WebSocket"].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]  transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/mohkcotS/Project_WEB_RestaurantManagementSystem" 
                                className="text-blue-300 hover:text-blue-200 transition-colors my-4">View Project → </a>
                    </div>
                </div>
                {/* End */}

            </div>
        </div>
        </RevealOnScroll>
    </section>
}