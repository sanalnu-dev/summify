from datetime import datetime


def generate_meeting_summary(transcript: str, title: str) -> dict:
    return {
        "overview": "This meeting focused on planning, updates, and next steps.",
        "key_discussion_points": [
            "Reviewed current progress",
            "Discussed challenges",
            "Outlined next milestones"
        ],
        "highlights": [
            "We need to move faster on execution."
        ],
        "decisions": [
            "Agreed to prioritize critical tasks first"
        ],
        "action_items": [
            {
                "task": "Prepare detailed follow-up report",
                "owner": "Team Lead",
                "role": "Manager",
                "priority": "High",
                "deadline": None
            }
        ],
        "metadata": {
            "meeting_title": title,
            "processed_at": datetime.utcnow().isoformat()
        }
    }
