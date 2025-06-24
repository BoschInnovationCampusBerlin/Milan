
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onNewReport: (report: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onNewReport }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      const newReport = {
        id: Date.now().toString(),
        name: `Assessment - ${file.name.replace(/\.[^/.]+$/, "")}`,
        type: 'Automated Assessment',
        date: new Date().toISOString().split('T')[0],
        content: `# Security Assessment Report\n\n## File Analysis: ${file.name}\n\n**File Type**: ${file.type || 'Unknown'}\n**File Size**: ${(file.size / 1024).toFixed(2)} KB\n**Upload Date**: ${new Date().toLocaleString()}\n\n## Assessment Summary\n\nThis document was automatically generated based on the uploaded file. The system has analyzed the content and identified potential security considerations.\n\n## Recommendations\n\n1. Review file permissions and access controls\n2. Verify file integrity and authenticity\n3. Implement proper file handling procedures\n\n## Next Steps\n\n- Manual review recommended\n- Additional testing may be required\n- Consider implementing automated scanning`
      };

      onNewReport(newReport);
      setIsProcessing(false);
      
      toast({
        title: "File Processed Successfully",
        description: `Generated security assessment for ${file.name}`,
      });
    }, 2000);
  }, [onNewReport, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    }
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-cyan-500 bg-cyan-50' 
            : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
        }`}
      >
        <input {...getInputProps()} />
        
        {isProcessing ? (
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="h-8 w-8 text-cyan-600 animate-spin" />
            <p className="text-sm text-slate-600">Processing file...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Upload className="h-8 w-8 text-slate-400" />
            <div>
              <p className="text-sm font-medium text-slate-700">
                {isDragActive ? 'Drop file here' : 'Upload security documents'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                PDF, DOC, DOCX, TXT files supported
              </p>
            </div>
          </div>
        )}
      </div>

      <Button 
        className="w-full bg-cyan-600 hover:bg-cyan-700"
        disabled={isProcessing}
      >
        <FileText className="h-4 w-4 mr-2" />
        Generate Assessment
      </Button>
    </div>
  );
};

export default FileUpload;
