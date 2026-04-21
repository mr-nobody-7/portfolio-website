import { GENERAL_INFO, SOCIAL_LINKS } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="text-center pb-5 py-20 relative z-10" id="contact">
      <div className="container">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
          {GENERAL_INFO.email}
        </a>

        <div className="flex justify-center gap-6 mb-8">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors capitalize text-sm"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Vivekananda Godi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
