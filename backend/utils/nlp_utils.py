from datetime import datetime
import spacy

# Load NLP model once
nlp = spacy.load("en_core_web_sm")


def generate_meeting_summary(transcript: str, title: str) -> dict:
    doc = nlp(transcript)

    # Sentence splitting
    sentences = [sent.text.strip() for sent in doc.sents]

    # Keyword extraction (nouns + proper nouns)
    keywords = list(
        set(
            token.text
            for token in doc
            if token.pos_ in ["NOUN", "PROPN"] and not token.is_stop
        )
    )

    # Action item detection (rule-based)
    action_items = []
    for sent in sentences:
        if any(word in sent.lower() for word in ["will", "should", "need to", "must"]):
            action_items.append({
                "task": sent,
                "owner": "Unassigned",
                "role": "Unassigned",
                "priority": "Medium",
                "deadline": None
            })

    return {
        "overview": sentences[0] if sentences else "No overview available.",
        "key_discussion_points": sentences[:3],
        "highlights": keywords[:5],
        "decisions": [],
        "action_items": action_items,
        "metadata": {
            "meeting_title": title,
            "processed_at": datetime.utcnow().isoformat()
        }
    }
