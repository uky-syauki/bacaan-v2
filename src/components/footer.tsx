import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="text-gray-900"
          >
            Bacaan
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <a href="https://www.linkedin.com/in/achmad-syauky-02aa03264" target="_blank">
                <i className="fab fa-linkedin text-lg" />
              </a>
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <a href="https://www.instagram.com/achmadsyauky_/" target="_blank">
                <i className="fa-brands fa-instagram text-lg" />
              </a>
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <a href="https://github.com/uky-syauki" target="_blank">
                <i className="fa-brands fa-github text-lg" />
              </a>
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="#" target="_blank">
            Bacaan
          </a>{" "}
          by{" "}
          <a href="#">
            Achmad
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
