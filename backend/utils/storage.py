# Simple in-memory storage for meetings
# Hackathon-friendly (resets when server restarts)

previous_meetings = []

def save_meeting(meeting_data: dict):
    """
    Save a meeting summary
    """
    previous_meetings.append(meeting_data)
    return meeting_data

def get_previous_meetings():
    """
    Get all previous meetings
    """
    return previous_meetings
