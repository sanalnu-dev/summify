from pydantic import BaseModel
from typing import Optional, List


class SessionRequest(BaseModel):
    entry_point: str = "landing"
    mode: str = "guest"

class TranscriptRequest(BaseModel):
    session_id: str
    meeting_title: Optional[str] = "Untitled Meeting"
    text: str


class ActionItem(BaseModel):
    task: str
    owner: Optional[str]
    role: Optional[str]
    priority: str
    deadline: Optional[str]


class MeetingSummary(BaseModel):
    overview: str
    key_discussion_points: List[str]
    highlights: List[str]
    decisions: List[str]
    action_items: List[ActionItem]
    metadata: dict