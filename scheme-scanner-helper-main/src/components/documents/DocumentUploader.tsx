
import { useState } from "react";
import { Upload, File, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function DocumentUploader() {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };
  
  const handleFiles = (files: File[]) => {
    // Filter for document file types
    const validFiles = files.filter(file => 
      file.type.match('application/pdf') || 
      file.type.match('image/*') ||
      file.type.match('application/msword') ||
      file.type.match('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    );
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid file type",
        description: "Please upload only documents or images.",
        variant: "destructive",
      });
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };
  
  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) return;
    
    setUploading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Documents Uploaded",
      description: `Successfully uploaded ${uploadedFiles.length} document(s).`,
    });
    
    setUploadedFiles([]);
    setUploading(false);
  };
  
  return (
    <div className="space-y-4">
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-muted-foreground/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Upload className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="mt-2 text-base font-semibold">Drop your documents here</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Support for PDF, DOCX, JPG, PNG
        </p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          Select Files
        </Button>
        <input
          id="file-upload"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      
      {uploadedFiles.length > 0 && (
        <div className="rounded-lg border bg-card animate-fade-in">
          <div className="p-4 border-b">
            <h4 className="font-medium">Selected Documents ({uploadedFiles.length})</h4>
          </div>
          <ul className="divide-y max-h-64 overflow-y-auto scrollbar-hide">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <File className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm truncate max-w-[200px]">
                    {file.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(0)} KB
                  </span>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t flex justify-end">
            <Button 
              onClick={uploadFiles} 
              disabled={uploading}
              className="flex items-center gap-2"
            >
              {uploading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Upload All</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
