from fastapi import APIRouter

router = APIRouter(tags=["System"])


@router.get("/")
def root():
    return {
        "message": "Summify backend is running"
    }


@router.get("/capabilities")
def capabilities():
    return {
        "supports_audio": True,
        "supports_transcript": True,
        "supported_formats": ["mp3", "wav"],
        "max_audio_size_mb": 100,
        "nlp_enabled": True
    }


@router.get("/health")
def health():
    return {
        "status": "ok"
    }
