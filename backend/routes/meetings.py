from fastapi import APIRouter
from utils.storage import get_all_meetings

router = APIRouter(
    prefix="/meetings",
    tags=["Meetings"]
)

@router.get("/")
def get_meeting_history():
    return get_all_meetings()
