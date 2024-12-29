import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function RegistrationForm() {
  return (
    <form className="space-y-8 max-w-2xl mx-auto">
      <Card className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Information des parents</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nom" />
            <Input placeholder="Prénom" />
            <Input type="email" placeholder="Email" className="col-span-2" />
            <Input type="tel" placeholder="Téléphone" className="col-span-2" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Information de l'enfant</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nom de l'enfant" />
            <Input placeholder="Prénom de l'enfant" />
            <Input type="date" placeholder="Date de naissance" className="col-span-2" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Horaires souhaités</h2>
          <div className="space-y-4">
            <Input type="date" placeholder="Date d'accueil souhaitée" />
            <textarea
              className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Commentaires ou besoins spécifiques..."
            />
          </div>
        </div>
      </Card>

      <Button type="submit" className="w-full">
        Envoyer la pré-inscription
      </Button>
    </form>
  )
}