import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '@/config/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="md:hidden">
          <Menu className="h-5 w-5 cursor-pointer" />
          <span className="sr-only">Toggle menu</span>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-lg font-semibold mb-5">Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-2 py-1 text-lg font-medium hover:text-primary-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}