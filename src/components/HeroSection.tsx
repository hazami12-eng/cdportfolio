import { Linkedin, Download, Github } from "lucide-react";
import heroImage from "../assets/hero.png";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Caadiang, Dayniel Loubien D.pdf";
    link.download = "Dayniel_Caadiang_Resume.pdf";
    link.click();
  };

  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <p className="text-accent font-heading font-semibold text-lg mb-2">Hello, I'm</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
            Dayniel Loubien<br />
            <span className="text-primary">Caadiang</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            Junior software developer with hands-on experience in full-stack development—building end-to-end solutions using backend APIs, Flutter mobile apps, web apps, and Power Platform tools.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Download CV
            </button>
            <a href="https://www.linkedin.com/in/dayniel-caadiang-92698736b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/hazami12-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        <div className="fade-up flex justify-center" style={{ animationDelay: "0.15s" }}>
          <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden border border-border shadow-lg">
            <img src={heroImage} alt="Developer abstract art" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;