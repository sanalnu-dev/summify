from fastapi import APIRouter
from llm.ollama_client import run_llm
from utils.session_utils import extract_action_items
from utils.storage import save_meeting
import json

router = APIRouter(
    prefix="/process",
    tags=["Processing"]
)

@router.post("/")
def process_meeting(data: dict):
    transcript = data.get("transcript", "")
    title = data.get("title", "Untitled Meeting")

    if not transcript.strip():
        return {"error": "Transcript is empty"}

    # Rule-based extraction
    action_items = extract_action_items(transcript)

    # STRICT JSON PROMPT
    prompt = f"""
You are an AI system that generates meeting minutes.
You MUST respond with valid JSON ONLY.
DO NOT include explanations or markdown.

Meeting Title:
{title}

Transcript:
{transcript}

Extracted Action Items:
{action_items}

Return JSON in EXACTLY this format:

{{
  "overview": "Short paragraph summary (2–3 sentences)",
  "key_points": [
    "Discussion point 1",
    "Discussion point 2"
  ],
  "decisions": [
    "Decision 1",
    "Decision 2"
  ],
  "action_items": [
    {{
      "task": "Task description",
      "owner": "Person or role if mentioned, else 'Unassigned'",
      "priority": "High, Medium, or Low"
    }}
  ],
  "highlights": [
    "Important insight or quote",
    "Another highlight"
  ]
}}

If a section has no content, return an empty list [].
"""

    llm_response = run_llm(prompt)

    try:
        structured_output = json.loads(llm_response)
    except json.JSONDecodeError:
        return {
            "error": "LLM returned invalid JSON",
            "raw_output": llm_response
        }

    result = {
        "title": title,
        **structured_output
    }

    save_meeting(result)
    return result
