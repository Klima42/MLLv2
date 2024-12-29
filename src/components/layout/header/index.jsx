import { Link } from 'react-router-dom';
import { Navigation } from './navigation';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            MAM
          </Link>
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}