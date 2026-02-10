import json
from pathlib import Path

DATA_FILE = Path("data/meetings.json")

def save_meeting(meeting_data: dict):
    DATA_FILE.parent.mkdir(exist_ok=True)

    if DATA_FILE.exists():
        with open(DATA_FILE, "r") as f:
            meetings = json.load(f)
    else:
        meetings = []

    meetings.append(meeting_data)

    with open(DATA_FILE, "w") as f:
        json.dump(meetings, f, indent=2)


def get_all_meetings():
    if not DATA_FILE.exists():
        return []

    with open(DATA_FILE, "r") as f:
        return json.load(f)
