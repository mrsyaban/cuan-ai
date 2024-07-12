import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineCloudUpload } from "react-icons/hi";

// interface File {
//   name: string;
//   type: string;
//   size: number;
//   // data: any; 
// }

const AnalyzerPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null); 
  
  const navigate = useNavigate(); 


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
      navigate("/result");
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="">

      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl">
          Analyze your watchlist company reports
        </div>
        <div>
          <input id="dropzone-file" type="file" className="hidden peer" onChange={(e) => {
              if(e.target.files){
                setFile(e.target.files[0])
              }
          }} accept="pdf" />
          <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center my-2 h-[480px] w-[1080px] border-2 border-gray-300 border-dashed rounded-lg peer-disabled:cursor-not-allowed peer-disabled:bg-slate-100 cursor-pointer hover:bg-gray-800"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                  e.preventDefault()
                  setFile(e.dataTransfer.files[0])
              }}
          >
            {
              file ?
                <div className="text-xl">
                  {file.name}
                </div>
                :
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <HiOutlineCloudUpload size={48} />
                    <p className="text-center">Select your company financial statement</p>
                </div>
            }
          </label>
          <textarea className="w-[1080px] h-20 rounded-lg bg-transparent focus:bg-gray-800 focus:border-white"/>
        </div>
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
