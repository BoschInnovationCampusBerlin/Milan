import React, { useEffect, useState } from 'react';
import FileUpload from '@/components/FileUpload';
import OutputList from '@/components/OutputList';
import FileExplorer from '@/components/FileExplorer';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [reports, setReports] = useState<Array<{
    id: string;
    name: string;
    type: string;
    date: string;
    content: string;
    url?: string;
  }>>([
    {
      id: '1',
      name: 'Security Assessment Report - Q4 2024',
      type: 'Risk Assessment',
      date: '2024-12-20',
      content: '# Security Assessment Report - Q4 2024\n\n## Executive Summary\n\nThis report provides a comprehensive security assessment of the organization\'s IT infrastructure...\n\n## Key Findings\n\n- **Critical**: 2 vulnerabilities found\n- **High**: 5 vulnerabilities found\n- **Medium**: 12 vulnerabilities found\n- **Low**: 8 vulnerabilities found\n\n## Recommendations\n\n1. Immediate patching of critical vulnerabilities\n2. Implementation of multi-factor authentication\n3. Regular security awareness training'
    },
    {
      id: '2', 
      name: 'Network Penetration Test',
      type: 'Penetration Test',
      date: '2024-12-15',
      content: '# Network Penetration Test Report\n\n## Scope\n\nThis penetration test covered the external network infrastructure...\n\n## Methodology\n\n- Reconnaissance\n- Vulnerability Assessment\n- Exploitation\n- Post-Exploitation\n\n## Results\n\nSuccessfully identified several attack vectors that could be exploited by malicious actors.'
    }
  ]);

  useEffect(() => {
    const fetchAzureFiles = async () => {
      try {
        const response = await fetch('/api/files'); // adjust if needed
        const files = await response.json();
        const formatted = files.map((file: any, index: number) => ({
          id: `azure-${index}`,
          name: file.name,
          type: file.contentType || 'File',
          date: file.lastModified || '',
          content: '',
          url: file.url,
        }));
        setReports(prev => [...prev, ...formatted]);
      } catch (err) {
        console.error('Error fetching Azure files:', err);
      }
    };

    fetchAzureFiles();
  }, []);

  const handleFileSelect = (fileId: string) => {
    setSelectedFile(fileId);
  };

  const handleNewReport = (report: any) => {
    setReports(prev => [...prev, report]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-800 text-white p-4">
        <h1 className="text-2xl font-bold">Security Assessment Platform</h1>
        <p className="text-slate-300 mt-1">Generate and manage security assessment documents</p>
      </header>
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel */}
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col">
          {/* File Upload Section */}
          <div className="p-4 border-b border-slate-200 flex-shrink-0">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Upload Files</h2>
            <FileUpload onNewReport={handleNewReport} />
          </div>
          
          {/* Output List Section */}
          <div className="flex-1 overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Generated Reports</h2>
            </div>
            <OutputList 
              reports={reports} 
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
            />
          </div>
        </div>

        {/* Middle Panel - File Explorer */}
        <div className="flex-1 bg-white border-r border-slate-200">
          <FileExplorer 
            selectedFile={selectedFile}
            reports={reports}
          />
        </div>

        {/* Right Panel - Chat */}
        <div className="w-96 bg-slate-50">
          <ChatInterface selectedFile={selectedFile} />
        </div>
      </div>
    </div>
  );
};

export default Index;
