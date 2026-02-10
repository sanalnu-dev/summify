from fastapi import APIRouter
from llm.ollama_client import run_llm
from utils.session_utils import extract_action_items
from utils.storage import save_meeting

router = APIRouter(
    prefix="/process",
    tags=["Processing"]
)

@router.post("/")
def process_meeting(data: dict):
    # 1. Read input
    transcript = data.get("transcript", "")
    title = data.get("title", "Untitled Meeting")

    if not transcript.strip():
        return {
            "error": "Transcript is empty"
        }

    # 2. Rule-based / NLP extraction (spaCy, etc.)
    action_items = extract_action_items(transcript)

    # 3. LLM prompt (Gemma via Ollama)
    prompt = f"""
You are an assistant that generates professional meeting minutes.

Meeting Title:
{title}

Transcript:
{transcript}

Extracted Action Items:
{action_items}

Generate:
1. Overview
2. Clearly written key action items
3. Any decisions made with the dates
4. Important highlights
"""

    llm_summary = run_llm(prompt)

    # 4. Final structured result
    result = {
        "title": title,
        "summary": llm_summary,
        "action_items": action_items
    }

    # 5. Save meeting
    save_meeting(result)

    # 6. Return to frontend
    return result
