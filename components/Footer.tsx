import { GENERAL_INFO } from "@/lib/data";

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

        <div className="text-muted-foreground">
          <p>© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};