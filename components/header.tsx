import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="border-foreground/20 fixed top-[1.6rem] z-50 flex w-full items-center justify-between px-4 py-3 md:top-7 md:p-4">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
