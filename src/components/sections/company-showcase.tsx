import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-10 py-10 pt-64 w-full relative px-6"
    >
      <p className="text-muted-foreground font-medium">
        Integrated with these industry leaders
      </p>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
        {companyShowcase.companyLogos.map((company) => (
          <Link
            href="#"
            className="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            key={company.id}
          >
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-xl font-semibold">{company.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
