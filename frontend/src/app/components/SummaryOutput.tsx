import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock, Lightbulb, MessageSquare, UserCircle } from "lucide-react";
import { Button } from "./ui/button";

export interface MeetingSummary {
  overview: string;
  keyPoints: string[];
  decisions: string[];
  actionItems: {
    task: string;
    assignee: string;
    priority: "high" | "medium" | "low";
  }[];
  highlights: string[];
}

interface SummaryOutputProps {
  summary: MeetingSummary;
  onNewSummary: () => void;
}

export function SummaryOutput({ summary, onNewSummary }: SummaryOutputProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-gray-900">Meeting Summary</h2>
        <Button onClick={onNewSummary} variant="outline" className="rounded-full">
          New Summary
        </Button>
      </div>

      {/* Overview */}
      <Card className="rounded-2xl border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-orange-600" />
          <h3 className="text-gray-900">Overview</h3>
        </div>
        <p className="leading-relaxed text-gray-700">{summary.overview}</p>
      </Card>

      {/* Key Discussion Points */}
      <Card className="rounded-2xl border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-green-600" />
          <h3 className="text-gray-900">Key Discussion Points</h3>
        </div>
        <ul className="space-y-3">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                {index + 1}
              </span>
              <span className="flex-1 leading-relaxed text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Decisions Made */}
      <Card className="rounded-2xl border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-purple-600" />
          <h3 className="text-gray-900">Decisions Made</h3>
        </div>
        <ul className="space-y-3">
          {summary.decisions.map((decision, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
              <span className="flex-1 leading-relaxed text-gray-700">{decision}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Action Items */}
      <Card className="rounded-2xl border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-orange-600" />
          <h3 className="text-gray-900">Action Items</h3>
        </div>
        <div className="space-y-3">
          {summary.actionItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <div className="flex-1 space-y-2">
                <p className="text-gray-900">{item.task}</p>
                <div className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{item.assignee}</span>
                </div>
              </div>
              <Badge
                className={`${
                  item.priority === "high"
                    ? "bg-red-100 text-red-700"
                    : item.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Highlighted Sentences */}
      {summary.highlights.length > 0 && (
        <Card className="rounded-2xl border-gray-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg">✨</span>
            <h3 className="text-gray-900">Important Highlights</h3>
          </div>
          <div className="space-y-3">
            {summary.highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-orange-500 bg-white p-4 italic text-gray-700"
              >
                "{highlight}"
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}