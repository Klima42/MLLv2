import { Link } from 'react-router-dom';
import { navigation } from '@/config/navigation';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
        >
          {item.name}
        </Link>
      ))}
      <Button className="h-8 px-5 text-sm" variant="default">
        <Link to="/registration" className="text-white">
          Pré-inscription
        </Link>
      </Button>
    </nav>
  );
}