# Summify Backend – Page 1

This backend supports the landing page of Summify.

## Features
- Session initialization (Continue button)
- Capability declaration
- Health check

## What this does NOT include
- NLP
- Audio processing
- Transcript handling
- Database
- Authentication

AI processing begins on Page 2 after user input.

## Run Instructions
```bash
pip install -r requirements.txt
uvicorn main:app --reload
