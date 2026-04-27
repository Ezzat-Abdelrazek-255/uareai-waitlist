import HeaderCta from "./header-cta";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="border-foreground/20 fixed top-0 z-50 flex w-full items-center justify-between p-4">
      <Logo />
      <Navigation />
      <HeaderCta />
    </header>
  );
};

export default Header;
