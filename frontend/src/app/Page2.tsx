import { useState } from "react";
import { MeetingHeader } from "./components/MeetingHeader";
import { UploadAudioSection } from "./components/UploadAudioSection";
import { PasteTranscriptSection } from "./components/PasteTranscriptSection";
import { ProcessingState } from "./components/ProcessingState";
import { SummaryOutput, MeetingSummary } from "./components/SummaryOutput";
import { MeetingsSidebar } from "./components/MeetingsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import React from "react";



const mockMeetings = [
  {
    id: "1",
    title: "Q1 Product Strategy Review",
    date: "Feb 8, 2026",
    time: "2:00 PM",
    participants: 8,
  },
  {
    id: "2",
    title: "Engineering Team Standup",
    date: "Feb 7, 2026",
    time: "10:00 AM",
    participants: 12,
  },
  {
    id: "3",
    title: "Customer Feedback Discussion",
    date: "Feb 6, 2026",
    time: "3:30 PM",
    participants: 5,
  },
  {
    id: "4",
    title: "Marketing Campaign Planning",
    date: "Feb 5, 2026",
    time: "1:00 PM",
    participants: 6,
  },
  {
    id: "5",
    title: "Sales Pipeline Review",
    date: "Feb 4, 2026",
    time: "11:00 AM",
    participants: 7,
  },
];

// Mock summary data
const mockSummary: MeetingSummary = {
  overview:
    "The team conducted a comprehensive Q1 product strategy review, focusing on upcoming feature releases, user feedback integration, and roadmap prioritization. Key stakeholders from engineering, design, and product management aligned on deliverables and timelines for the next quarter.",
  keyPoints: [
    "Discussed the new dashboard redesign project with expected completion in March 2026",
    "Reviewed customer feedback from the latest NPS survey showing 85% satisfaction rate",
    "Evaluated three potential features for the Q2 roadmap based on user requests",
    "Analyzed competitive landscape and identified opportunities for differentiation",
    "Addressed technical debt concerns raised by the engineering team",
  ],
  decisions: [
    "Approved budget increase of $50K for user research initiatives",
    "Prioritized mobile app optimization over new feature development for Q1",
    "Agreed to implement weekly cross-functional sync meetings",
    "Selected UserTesting.com as the primary usability testing platform",
  ],
  actionItems: [
    {
      task: "Create detailed technical specifications for the dashboard redesign",
      assignee: "Sarah Chen (Engineering Lead)",
      priority: "high",
    },
    {
      task: "Schedule user interviews with 10-15 customers by end of February",
      assignee: "Michael Rodriguez (Product Manager)",
      priority: "high",
    },
    {
      task: "Prepare competitive analysis report and share with leadership",
      assignee: "Emily Watson (Product Strategist)",
      priority: "medium",
    },
    {
      task: "Update roadmap timeline and communicate to stakeholders",
      assignee: "David Kim (Product Director)",
      priority: "medium",
    },
    {
      task: "Review and document technical debt priorities for Q2 planning",
      assignee: "Alex Thompson (Tech Lead)",
      priority: "low",
    },
  ],
  highlights: [
    "We need to move faster on mobile optimization - it's becoming a competitive disadvantage.",
    "The user feedback has been overwhelmingly positive about the new onboarding flow.",
    "Let's make sure we're not just building features, but solving real customer problems.",
  ],
};
export default function Page2() {
  const [activeTab, setActiveTab] = useState("upload");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [currentMeetingTitle, setCurrentMeetingTitle] = useState("New Meeting Summary");

  const handleFileSelect = (file: File) => {
    setIsProcessing(true);
    setCurrentMeetingTitle(file.name.replace(/\.[^/.]+$/, ""));
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSummary(true);
    }, 3000);
  };

  const handleTranscriptSubmit = (transcript: string) => {
    setIsProcessing(true);
    setCurrentMeetingTitle("Transcript Summary");
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSummary(true);
    }, 3000);
  };

  const handleNewSummary = () => {
    setShowSummary(false);
    setIsProcessing(false);
    setCurrentMeetingTitle("New Meeting Summary");
  };

  const handleSelectMeeting = (meeting: any) => {
    setCurrentMeetingTitle(meeting.title);
    setShowSummary(true);
  };
 return (
    <div className="flex h-screen flex-col bg-gray-50">
      <MeetingHeader meetingTitle={currentMeetingTitle} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-8 py-8">
            {isProcessing ? (
              <ProcessingState />
            ) : showSummary ? (
              <SummaryOutput summary={mockSummary} onNewSummary={handleNewSummary} />
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-2 rounded-full bg-white p-1 shadow-sm">
                  <TabsTrigger
                    value="upload"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
                  >
                    Upload Audio
                  </TabsTrigger>
                  <TabsTrigger
                    value="transcript"
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white"
                  >
                    Paste Transcript
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upload">
                  <UploadAudioSection onFileSelect={handleFileSelect} />
                </TabsContent>

                <TabsContent value="transcript">
                  <PasteTranscriptSection onTranscriptSubmit={handleTranscriptSubmit} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <MeetingsSidebar meetings={mockMeetings} onSelectMeeting={handleSelectMeeting} />
        </div>
      </div>
    </div>
  );
}