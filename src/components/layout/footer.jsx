export function Footer() {
  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-gray-600">contact@mam.fr</p>
            <p className="text-sm text-gray-600">01 23 45 67 89</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Horaires</h3>
            <p className="text-sm text-gray-600">Du lundi au vendredi</p>
            <p className="text-sm text-gray-600">6h30 - 18h30</p>
          </div>
        </div>
      </div>
    </footer>
  );
}