import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileForm } from "@/components/ProfileForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ProfileHeader />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <ProfileForm />
      </main>
    </div>
  );
};

export default Index;
