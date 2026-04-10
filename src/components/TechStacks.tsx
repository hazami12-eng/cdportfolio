const categories = [
  {
    title: "Frontend",
    skills: ["React", "Vue", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [".NET", "API Development", "Python", "Javascript"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Azure DevOps"],
  },
  {
    title: "Practices",
    skills: ["Agile Development", "Database Management", "Full-Stack Dev", "API Integration"],
  },
];

const TechStacks = () => {
  return (
    <section id="tech" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Tech <span className="text-primary">Stacks</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={cat.title} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-accent/10 text-accent border border-accent/20 rounded-full px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
