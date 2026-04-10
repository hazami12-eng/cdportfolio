const timeline = [
  {
    period: "Dec 2025 – Jan 2026",
    title: "Flutter & Power Platform Developer",
    company: "ERNI Philippines Bootcamp",
    points: [
      "Developed a Flutter mobile application with backend API support",
      "Created Power Apps for data entry and management",
      "Built custom connectors for Power Platform integrations",
      "Improved workflows and automations using Power Automate",
    ],
  },
  {
    period: "Oct 2025 – Jan 2025",
    title: "Web Developer",
    company: "ERNI Philippines Bootcamp",
    points: [
      "Developed and maintained backend APIs for web applications",
      "Implemented frontend/backend enhancements and bug fixes",
      "Worked on API integrations and server-side logic",
      "Collaborated with team on feature updates and improvements",
    ],
  },
  {
    period: "2021 – 2025",
    title: "BS Computer Science – Information Technology",
    company: "Technological Institute of the Philippines, Quezon City",
    points: [],
  },
];

const PathToGrowth = () => {
  return (
    <section id="growth" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Path to <span className="text-primary">Growth</span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="fade-up relative pl-12" style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Node */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />

                <p className="text-sm text-muted-foreground font-medium mb-1">{item.period}</p>
                <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{item.company}</p>
                {item.points.length > 0 && (
                  <ul className="space-y-1">
                    {item.points.map((pt, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-accent mt-1 shrink-0">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToGrowth;
