import { RegistrationForm } from "@/components/forms/registration-form"

export default function RegistrationPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Pré-inscription</h1>
          <p className="text-muted-foreground">
            Remplissez ce formulaire pour pré-inscrire votre enfant à la MAM
          </p>
        </div>
        <div className="border-t" />
        <RegistrationForm />
      </div>
    </div>
  )
}