import { useEffect } from 'react';

export const useAzureFiles = (setReports: Function) => {
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch('/api/files');
        const files = await res.json();
        const formatted = files.map((file: any, index: number) => ({
          id: `azure-${index}`,
          name: file.name,
          type: file.contentType || 'File',
          date: file.lastModified || '',
          content: '',
          url: file.url,
        }));
        setReports((prev: any[]) => [...prev, ...formatted]);
      } catch (err) {
        console.error('Failed to load files:', err);
      }
    };
    fetchFiles();
  }, []);
};
