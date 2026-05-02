import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="border-foreground/20 fixed top-10 z-50 flex w-full items-center justify-between px-4 py-0 md:top-8 md:px-8">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
