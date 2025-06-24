
import React from 'react';
import { FileText, Calendar, Shield } from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: string;
  date: string;
  content: string;
}

interface OutputListProps {
  reports: Report[];
  onFileSelect: (fileId: string) => void;
  selectedFile: string | null;
}

const OutputList: React.FC<OutputListProps> = ({ reports, onFileSelect, selectedFile }) => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'risk assessment': return <Shield className="h-4 w-4 text-red-500" />;
      case 'penetration test': return <Shield className="h-4 w-4 text-orange-500" />;
      default: return <FileText className="h-4 w-4 text-cyan-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'risk assessment': return 'bg-red-100 text-red-700';
      case 'penetration test': return 'bg-orange-100 text-orange-700';
      default: return 'bg-cyan-100 text-cyan-700';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4">
      <div className="space-y-3">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => onFileSelect(report.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all hover:shadow-md ${
              selectedFile === report.id
                ? 'border-cyan-500 bg-cyan-50 shadow-md'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getTypeIcon(report.type)}
                <h3 className="font-medium text-slate-800 text-sm line-clamp-2">
                  {report.name}
                </h3>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                {report.type}
              </span>
              <div className="flex items-center text-xs text-slate-500">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(report.date).toLocaleDateString()}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutputList;
