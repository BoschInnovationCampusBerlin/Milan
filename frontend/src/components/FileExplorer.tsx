
import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Report {
  id: string;
  name: string;
  type: string;
  date: string;
  content: string;
}

interface FileExplorerProps {
  selectedFile: string | null;
  reports: Report[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ selectedFile, reports }) => {
  const currentReport = reports.find(report => report.id === selectedFile);

  const handleDownload = () => {
    if (!currentReport) return;
    
    const blob = new Blob([currentReport.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentReport.name}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderMarkdown = (content: string) => {
    // Simple markdown rendering for demo purposes
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold text-slate-800 mb-4 mt-6">{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-semibold text-slate-700 mb-3 mt-5">{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-medium text-slate-600 mb-2 mt-4">{line.substring(4)}</h3>;
        } else if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1 text-slate-600">{line.substring(2)}</li>;
        } else if (line.match(/^\d+\. /)) {
          return <li key={index} className="ml-4 mb-1 text-slate-600 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
        } else if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-semibold text-slate-700 mb-2">{line.slice(2, -2)}</p>;
        } else if (line.trim() === '') {
          return <br key={index} />;
        } else {
          return <p key={index} className="text-slate-600 mb-2 leading-relaxed">{line}</p>;
        }
      });
  };

  if (!selectedFile || !currentReport) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-500 mb-2">No File Selected</h3>
          <p className="text-slate-400">Select a report from the left panel to view its contents</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">{currentReport.name}</h2>
            <p className="text-sm text-slate-500 mt-1">
              {currentReport.type} • {new Date(currentReport.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button size="sm" onClick={handleDownload} className="bg-cyan-600 hover:bg-cyan-700">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-none prose prose-slate">
          {renderMarkdown(currentReport.content)}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FileExplorer;
