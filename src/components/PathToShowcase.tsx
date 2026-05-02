const projects = [
  {
    title: "Enterprise Web Application",
    description: "Built backend services and APIs to support internal web applications at ERNI Philippines.",
    tags: ["Python", "React", "API", "Web"],
    image: "/images/project1.png",
  },
  {
    title: "Chrome Extension MVP",
    description: "Compare product prices between Shopee PH and Lazada PH",
    tags: ["Node.js", "React", "API", "Web"],
    image: "/images/project2.png",
  },
  {
    title: "AI-Powered CRM Pipeline Health Monitor",
    description:
      "A Node.js backend that syncs HubSpot CRM data, calculates pipeline health, generates AI insights with OpenAI.",
    tags: ["Node.js", "Backend", "API", "Web"],
    image: "/images/project3.png",
  },
];

const PathToShowcase = () => {
  return (
    <section id="showcase" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Path to <span className="text-primary">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="fade-up group bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* IMAGE */}
              <div className="w-full h-32 bg-secondary rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-muted-foreground text-3xl font-heading font-bold opacity-30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* TITLE */}
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-medium"
                  >
                    {tag}
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

export default PathToShowcase;