from fastapi import FastAPI
from routes import session, system, processing, meetings

app = FastAPI(title="Summify Backend")

# Page 1
app.include_router(system.router)
app.include_router(session.router)

# Page 2
app.include_router(processing.router)
app.include_router(meetings.router)
