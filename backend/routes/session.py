from fastapi import APIRouter
from datetime import datetime
from models import SessionRequest
from utils.session_utils import generate_session_id

router = APIRouter(prefix="/session", tags=["Session"])


@router.post("/start")
def start_session(request: SessionRequest):
    session_id = generate_session_id()

    return {
        "session_id": session_id,
        "user_type": request.mode,
        "created_at": datetime.utcnow().isoformat()
    }
