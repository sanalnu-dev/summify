from fastapi import APIRouter
from utils.storage import previous_meetings

router = APIRouter(prefix="/meetings", tags=["Meetings"])


@router.get("")
def get_previous_meetings():
    return previous_meetings
