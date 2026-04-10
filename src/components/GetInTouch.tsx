import { Mail, Linkedin, Github, Phone } from "lucide-react";

const GetInTouch = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's build something <span className="text-primary">together</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          I'm open to opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="mailto:caadiangdayniel@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href="tel:09683367886"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-heading font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <Phone size={18} />
            Call Me
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
        <p className="text-muted-foreground text-sm mt-12">
          © 2026 Dayniel Loubien Caadiang. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
