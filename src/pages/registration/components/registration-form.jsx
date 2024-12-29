import { FormSection } from "./form-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegistration } from "@/lib/api/hooks/useRegistration";

export function RegistrationForm() {
  const { submit, isSubmitting, error, success } = useRegistration();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      parentLastName: formData.get('parentLastName'),
      parentFirstName: formData.get('parentFirstName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      childLastName: formData.get('childLastName'),
      childFirstName: formData.get('childFirstName'),
      birthDate: formData.get('birthDate'),
      startDate: formData.get('startDate'),
      comments: formData.get('comments')
    };

    const succeeded = await submit(data);
    if (succeeded) {
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
      <FormSection title="Information des parents">
        <Input name="parentLastName" placeholder="Nom" required />
        <Input name="parentFirstName" placeholder="Prénom" required />
        <Input name="email" type="email" placeholder="Email" className="col-span-2" required />
        <Input name="phone" type="tel" placeholder="Téléphone" className="col-span-2" required />
      </FormSection>

      <FormSection title="Information de l'enfant">
        <Input name="childLastName" placeholder="Nom de l'enfant" required />
        <Input name="childFirstName" placeholder="Prénom de l'enfant" required />
        <Input name="birthDate" type="date" placeholder="Date de naissance" className="col-span-2" required />
      </FormSection>

      <FormSection title="Horaires souhaités">
        <Input name="startDate" type="date" placeholder="Date d'accueil souhaitée" className="col-span-2" required />
        <div className="col-span-2">
          <textarea
            name="comments"
            className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Commentaires ou besoins spécifiques..."
          />
        </div>
      </FormSection>

      {error && (
        <div className="text-red-500 text-center">{error}</div>
      )}

      {success && (
        <div className="text-green-500 text-center">
          Votre pré-inscription a été envoyée avec succès !
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la pré-inscription'}
      </Button>
    </form>
  );
}