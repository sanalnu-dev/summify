import { Upload, FileAudio } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface UploadAudioSectionProps {
  onFileSelect: (file: File) => void;
}

export function UploadAudioSection({ onFileSelect }: UploadAudioSectionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    const audioFile = files.find(file => 
      file.type === 'audio/mp3' || 
      file.type === 'audio/wav' || 
      file.type === 'audio/mpeg'
    );
    
    if (audioFile) {
      setSelectedFile(audioFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleGenerateSummary = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`relative rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
          isDragging
            ? 'border-orange-500 bg-orange-50'
            : 'border-gray-300 bg-gray-50 hover:border-orange-400 hover:bg-orange-50/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="audio-upload"
          className="hidden"
          accept=".mp3,.wav,audio/*"
          onChange={handleFileInput}
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-orange-100 p-4">
            <Upload className="h-10 w-10 text-orange-600" />
          </div>
          
          {selectedFile ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600">
                <FileAudio className="h-5 w-5" />
                <span className="text-base">{selectedFile.name}</span>
              </div>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <>
              <div>
                <p className="mb-2 text-lg text-gray-700">
                  Drag & drop your audio file here
                </p>
                <p className="text-sm text-gray-500">or</p>
              </div>
              
              <label htmlFor="audio-upload">
                <Button asChild variant="outline" className="cursor-pointer">
                  <span>Browse Files</span>
                </Button>
              </label>
              
              <p className="text-xs text-gray-400">
                Supports MP3, WAV (Max 100MB)
              </p>
            </>
          )}
        </div>
      </div>

      {selectedFile && (
        <div className="flex justify-center">
          <Button
            onClick={handleGenerateSummary}
            className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6 hover:from-orange-600 hover:to-yellow-600"
          >
            Generate Summary
          </Button>
        </div>
      )}
    </div>
  );
}