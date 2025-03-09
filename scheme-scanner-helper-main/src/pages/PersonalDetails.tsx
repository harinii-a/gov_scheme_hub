
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

export default function PersonalDetails() {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Your personal details have been saved.",
    });
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-semibold text-foreground">Personal Details</h1>
            <p className="text-muted-foreground mt-1">Please fill in your information accurately</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h2 className="text-xl font-medium mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                    <Input id="fullName" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="age" className="text-sm font-medium">Age</label>
                    <Input id="age" placeholder="Enter your age" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gender" className="text-sm font-medium">Gender</label>
                    <Select>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "dd/MM/yyyy") : "dd/mm/yyyy"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" placeholder="Enter email address" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="aadhar" className="text-sm font-medium">Aadhar Number</label>
                    <Input id="aadhar" placeholder="Enter Aadhar number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="maritalStatus" className="text-sm font-medium">Marital Status</label>
                    <Select>
                      <option value="">Select status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Work & Interest Details Section */}
              <div>
                <h2 className="text-xl font-medium mb-4">Work & Interest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="qualification" className="text-sm font-medium">Qualification</label>
                    <Select>
                      <option value="">Select qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Post Graduate</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="occupation" className="text-sm font-medium">Occupation</label>
                    <Select>
                      <option value="">Select occupation</option>
                      <option value="student">Student</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-employed</option>
                      <option value="unemployed">Unemployed</option>
                    </Select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium">Interested Areas</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agriculture" />
                      <label htmlFor="agriculture" className="text-sm">Agriculture</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="education" />
                      <label htmlFor="education" className="text-sm">Education</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business" />
                      <label htmlFor="business" className="text-sm">Business</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="technology" />
                      <label htmlFor="technology" className="text-sm">Technology</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="health" />
                      <label htmlFor="health" className="text-sm">Health</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="social" />
                      <label htmlFor="social" className="text-sm">Social Welfare</label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <label htmlFor="workArea" className="text-sm font-medium">Current Work Area</label>
                    <Select>
                      <option value="">Select area</option>
                      <option value="urban">Urban</option>
                      <option value="rural">Rural</option>
                      <option value="semi-urban">Semi-urban</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Languages</label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="english" 
                          checked={selectedLanguages.includes('English')}
                          onCheckedChange={() => handleLanguageChange('English')}
                        />
                        <label htmlFor="english" className="text-sm">English</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hindi"
                          checked={selectedLanguages.includes('Hindi')}
                          onCheckedChange={() => handleLanguageChange('Hindi')}
                        />
                        <label htmlFor="hindi" className="text-sm">Hindi</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="tamil"
                          checked={selectedLanguages.includes('Tamil')}
                          onCheckedChange={() => handleLanguageChange('Tamil')}
                        />
                        <label htmlFor="tamil" className="text-sm">Tamil</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="telugu"
                          checked={selectedLanguages.includes('Telugu')}
                          onCheckedChange={() => handleLanguageChange('Telugu')}
                        />
                        <label htmlFor="telugu" className="text-sm">Telugu</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Upload Section */}
              <div>
                <h2 className="text-xl font-medium mb-4">Document Upload</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Aadhar Card</p>
                      <span className="text-xs text-red-500">Missing</span>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Upload
                    </Button>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Income Certificate</p>
                      <span className="text-xs text-red-500">Missing</span>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Upload
                    </Button>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Community Certificate</p>
                      <span className="text-xs text-green-500">Uploaded</span>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Replace
                    </Button>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Other Documents</p>
                      <span className="text-xs text-gray-500">Optional</span>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <Button variant="outline" type="button">Clear Form</Button>
              <Button type="submit">Save & Continue</Button>
            </div>
          </form>

          <div className="p-4 text-center text-xs text-muted-foreground border-t">
            © 2023 GovSchemes. All rights reserved.
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
