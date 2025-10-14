import { RevealOnScroll } from "../RevealOnScroll";
import { Widget } from "../Widget";
import { ExperienceRow } from "../ExperienceRow";
import { educations, experiences } from "../../data";
import { ProfileCard } from "../ProfileCard";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-20 xl:pt-0">
          <Widget>
            <ProfileCard/>
          </Widget>

          <div className="flex flex-col gap-10">
            <Widget title="🏫 Education">
              <div className="flex flex-col gap-10">
                {educations.map((ex) => (
                  <ExperienceRow
                    title={ex.title}
                    year={ex.year}
                    description={ex.description}
                  />
                ))}
              </div>
            </Widget>

            <Widget title="💼 Work Experience">
              <div className="flex flex-col gap-10">
                {experiences.map((ex) => (
                  <ExperienceRow
                    title={ex.title}
                    year={ex.year}
                    description={ex.description}
                  />
                ))}
              </div>
            </Widget>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
