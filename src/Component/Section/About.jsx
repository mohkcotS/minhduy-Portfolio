import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const feSkills = ["React", "Java Script", "Tailwind CSS"] 
    const beSkills = ["Springboot", "Java", "MySQL"] 
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 ">My career goal is to develop a strong foundation in software development 
                    and web technologies. I aim to gain practical experience through internships and part-time roles, contributing 
                    to innovative projects while expanding my technical skills for both back end and front end. Ultimately, I want 
                    to work in a collaborative environment where I can grow as a developer, solve real-world problems, and create 
                    high-impact solutions that enhance user experiences.</p>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {feSkills.map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {beSkills.map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                             <strong>B.S. in Computer Science</strong>  - International University (2022-2026)
                        </li>
                        <li>
                             Relevant Coursework: DSA, PDM, Web Application,...
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Student (2022-present)</h4>
                            <p>Journey to be a full stack developer</p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}