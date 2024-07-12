import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files"; // Adjust import based on actual library exports
import axios from "axios";

interface FileObject {
  name: string;
  type: string;
  size: number;
  // data: any; 
}

const AnalyzerPage: React.FC = () => {
  const [file, setFile] = useState<FileObject | null>(null); 
  
  const navigate = useNavigate(); 

  const handleChange = (file: FileObject) => {
    setFile(file);
  };

  useEffect(() => {
    if (file) {
      // navigate('/result');
    }
  }, [file, navigate]);
  
  const onSubmit = async () => {
      try {
        const data = new FormData();
        data.append("file", file as File)
        const response = await axios.post(import.meta.env.VITE_API_URL + "/analyze/file", FormData);
        console.log(response)
      } catch (error) {
        console.error("Error fetching user:", error);
      }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="">

      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl">
          Analyze your watchlist company reports
        </div>
        <FileUploader handleChange={handleChange} name="file" types={['pdf']} />
        <button onClick={onSubmit}>
          Submit
        </button>
        {/* <div className="flex border-gray-400 text-gray-400 border rounded-2xl p-12">
          Drop your file here
        </div> */}
      </div>
    </div>
  );
};

export default AnalyzerPage;
