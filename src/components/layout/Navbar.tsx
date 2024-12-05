export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <MainMenu />
          </div>
          <div className="flex items-center">
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
} 