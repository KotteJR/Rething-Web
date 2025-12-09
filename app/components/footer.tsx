import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="w-full border-zinc-200 bg-white mt-8 sm:mt-12 lg:mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation links */}
        <nav className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-600">
          
          <a
            href="#about"
            className="transition hover:text-zinc-600"
          >
            About Us
          </a>
          <a
            href="/pricing"
            className="transition hover:text-zinc-600"
          >
            Pricing
          </a>
          <a
            href="/faq"
            className="transition hover:text-zinc-600"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="transition hover:text-zinc-600"
          >
            Contact
          </a>
         
          <a
            href="https://www.linkedin.com/company/rethingse/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-zinc-600"
          >
            LinkedIn
            <HiOutlineArrowTopRightOnSquare className="h-3 w-3" />
          </a>
        </nav>

        {/* Privacy Policy link */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <a
            href="#privacy"
            className="text-xs sm:text-sm font-medium text-zinc-500 transition hover:text-zinc-700"
          >
            Privacy Policy
          </a>
        </div>

        {/* Large faded ReThing text */}
        <div className="relative w-full overflow-hidden">
          <h2 
            className="w-full text-center font-bold leading-none select-none"
            style={{
              fontSize: 'clamp(48px, 15vw, 280px)',
              color: '#f4f4f5',
              backgroundImage: 'repeating-linear-gradient(45deg, #f4f4f5, #f4f4f5 1px, #e4e4e7 4px, #e4e4e7 4px)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ReThing
          </h2>
        </div>
      </div>
    </footer>
  );
}

