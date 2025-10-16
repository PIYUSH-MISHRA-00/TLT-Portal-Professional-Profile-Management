import { Building2, User } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <header className="w-full bg-background border-b border-border py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">TLT Portal</h1>
            <p className="text-xs text-muted-foreground">Professional Profile Management</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium text-foreground">John Doe</span>
            <span className="text-xs text-muted-foreground">Administrator</span>
          </div>
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-accent-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};
