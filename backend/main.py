from projects import PROJECTS
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import ContactPayload

app = FastAPI(title="Neon Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/projects")
async def projects():
    return PROJECTS

@app.post("/contact")
async def contact(payload: ContactPayload):
    return {"success": True, "data": payload}