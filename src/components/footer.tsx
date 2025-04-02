const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
  <div className="container flex flex-col mx-auto">
    <div className="flex flex-col md:flex-row items-center !justify-between">
      <a href="/" className="text-gray-900 text-xl font-semibold">
        Bacaan
      </a>

      <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
        <li>
          <a
            href="/kontak"
            className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-sm"
          >
            Kontak
          </a>
        </li>
      </ul>

      <div className="flex w-fit justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/achmad-syauky-02aa03264"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <i className="fab fa-linkedin text-lg" />
        </a>
        
        <a
          href="https://www.instagram.com/achmadsyauky_/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <i className="fa-brands fa-instagram text-lg" />
        </a>

        <a
          href="https://github.com/uky-syauki"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <i className="fa-brands fa-github text-lg" />
        </a>
      </div>
    </div>

    <p className="text-center mt-12 font-normal text-gray-700">
      &copy; {CURRENT_YEAR} Made with{" "}
      <a href="/" className="underline hover:text-gray-900">
        Bacaan
      </a>{" "}
      by{" "}
      <a href="/" className="underline hover:text-gray-900">
        Achmad
      </a>
      .
    </p>
  </div>
</footer>
  );
}

export default Footer;
