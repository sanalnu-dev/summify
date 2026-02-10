import { FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PasteTranscriptSectionProps {
  onTranscriptSubmit: (transcript: string) => void;
}

export function PasteTranscriptSection({ onTranscriptSubmit }: PasteTranscriptSectionProps) {
  const [transcript, setTranscript] = useState("");

  const handleSubmit = () => {
    if (transcript.trim()) {
      onTranscriptSubmit(transcript);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-gray-700">
          <FileText className="h-5 w-5 text-orange-600" />
          <h3>Paste Meeting Transcript</h3>
        </div>
        
        <Textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Paste your meeting transcript here...

Example:
John: Welcome everyone to today's product review meeting.
Sarah: Thanks John. I'd like to start by discussing the Q1 roadmap..."
          className="min-h-[400px] resize-none rounded-xl border-gray-300 bg-gray-50 p-4"
        />
        
        <div className="mt-2 text-right text-sm text-gray-400">
          {transcript.length} characters
        </div>
      </div>

      {transcript.trim() && (
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-6 hover:from-orange-600 hover:to-yellow-600"
          >
            Generate Summary
          </Button>
        </div>
      )}
    </div>
  );
}