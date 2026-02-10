import { Search, Clock } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  participants: number;
}

interface MeetingsSidebarProps {
  meetings: Meeting[];
  onSelectMeeting: (meeting: Meeting) => void;
}

export function MeetingsSidebar({ meetings, onSelectMeeting }: MeetingsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetings = meetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col border-l border-gray-200 bg-gray-50">
      <div className="border-b border-gray-200 bg-white p-4">
        <h3 className="mb-3 text-gray-900">Previous Meetings</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search meetings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border-gray-300 bg-gray-50 pl-10"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          {filteredMeetings.map((meeting) => (
            <button
              key={meeting.id}
              onClick={() => onSelectMeeting(meeting)}
              className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left transition-all hover:border-orange-300 hover:bg-orange-50 hover:shadow-sm"
            >
              <h4 className="mb-2 line-clamp-2 text-sm text-gray-900">
                {meeting.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{meeting.date}</span>
                <span>•</span>
                <span>{meeting.time}</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                {meeting.participants} participants
              </div>
            </button>
          ))}

          {filteredMeetings.length === 0 && (
            <div className="py-8 text-center text-sm text-gray-400">
              No meetings found
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}