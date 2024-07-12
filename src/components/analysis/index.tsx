import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files"; // Adjust import based on actual library exports

interface FileObject {
  name: string;
  type: string;
  size: number;
  // data: any; 
}

const AnalyzerComponent: React.FC = () => {
  const [file, setFile] = useState<FileObject | null>(null);
  const [textInput, setTextInput] = useState<string>('');

  const navigate = useNavigate();

  const handleChange = (file: FileObject) => {
    setFile(file);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
  };

  useEffect(() => {
    if (file) {
      navigate('/result');
    }
  }, [file, navigate]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl">
          Analyze your watchlist company reports
        </div>
        <FileUploader handleChange={handleChange} name="file" types={['pdf']} />
        <textarea
          className="mt-4 p-2 border border-gray-400 rounded"
          rows={4}
          cols={50}
          value={textInput}
          onChange={handleTextChange}
          placeholder="Enter your news text or link here..."
        />
      </div>
    </div>
  );
};

export default AnalyzerComponent;
