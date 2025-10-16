import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const ProfileForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-lg pt-8 px-10 pb-10 shadow-xl">
      <div className="mb-8">
        <h2 className="text-[24px] font-semibold text-foreground leading-[29px]">Create Your Profile</h2>
      </div>

      <form className="space-y-8">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Your Name</Label>
            <Input 
              id="firstName" 
              placeholder="First Name" 
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="opacity-0 pointer-events-none">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Last Name" 
              type="text"
            />
          </div>
        </div>

        {/* Email and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              placeholder="Enter your email" 
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile No.</Label>
            <Input 
              id="mobile" 
              placeholder="Enter your mobile number" 
              type="tel"
            />
          </div>
        </div>

        {/* Role and Specialty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="role">Select Primary Role</Label>
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Choose your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="producer">Producer</SelectItem>
                <SelectItem value="director">Director</SelectItem>
                <SelectItem value="cinematographer">Cinematographer</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="sound-designer">Sound Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialty">Specialty Type</Label>
            <Select>
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="film">Film Production</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="documentary">Documentary</SelectItem>
                <SelectItem value="music-video">Music Video</SelectItem>
                <SelectItem value="corporate">Corporate Video</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Producer Checkbox */}
        <div className="flex items-center space-x-3 py-2">
          <Checkbox id="producer" />
          <Label htmlFor="producer" className="cursor-pointer font-normal">
            Is this user a producer?
          </Label>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="country">Location</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="in">India</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="city">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pt-2">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full md:w-auto md:min-w-[140px]"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="w-full md:w-auto md:min-w-[140px]"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
