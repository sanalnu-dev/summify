import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "gemma"

def run_llm(prompt: str) -> str:
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False
        },
        timeout=600
    )
    return response.json()["response"]
