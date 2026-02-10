import uuid
import spacy

nlp = spacy.load("en_core_web_sm")

def generate_session_id() -> str:
    return f"sess_{uuid.uuid4().hex[:8]}"

def extract_action_items(text: str):
    doc = nlp(text)
    action_items = []

    for sent in doc.sents:
        sent_lower = sent.text.lower()
        if (
            "will" in sent_lower
            or "handle" in sent_lower
            or "look into" in sent_lower
            or "fix" in sent_lower
            or "work on" in sent_lower
        ):
            action_items.append(sent.text.strip())

    return action_items
