import { Video } from "lucide-react";
import { useState, useEffect } from "react";

interface MeetingHeaderProps {
  meetingTitle: string;
}

export function MeetingHeader({ meetingTitle }: MeetingHeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <header className="border-b border-gray-200 bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 p-2">
              <Video className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl text-gray-900">Summify</h1>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm text-gray-500">{formatDate(currentTime)}</p>
            <p className="text-base text-gray-900">{formatTime(currentTime)}</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="text-right">
            <p className="text-sm text-gray-500">Current Meeting</p>
            <p className="text-base text-gray-900">{meetingTitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}