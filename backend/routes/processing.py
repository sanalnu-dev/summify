from fastapi import APIRouter
from utils.storage import save_meeting

router = APIRouter(prefix="/process", tags=["Processing"])

@router.post("/transcript")
def process_transcript(data: dict):
    result = {
        "session_id": data.get("session_id"),
        "meeting_title": data.get("meeting_title"),
        "summary": "The meeting discussed roadmap progress and upcoming deliverables.",
        "action_items": [
            "Complete landing page by Friday",
            "Integrate audio processing next week",
            "Follow up with design team on UI feedback"
        ]
    }

    save_meeting(result)
    return result
