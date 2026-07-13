from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Neon Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactPayload(BaseModel):
    name: str
    email: str
    message: str

PROJECTS = [
    {
        "id": 1,
        "name": "BimaMall",
        "desc": "Modern e-commerce platform for video game sales featuring a responsive interface, product search, and dashboard management.",
        "tech": [
            "Vue.js",
            "Express.js",
            "Node.js",
            "MongoDB"
        ]
    },
    {
        "id": 2,
        "name": "Portfolio 1.0",
        "desc": "Personal portfolio website showcasing projects, skills, and experiences with a clean and responsive user interface.",
        "tech": [
            "Vue.js"
        ]
    },
    {
        "id": 3,
        "name": "InvestasiBima",
        "desc": "Educational platform providing information and insights about investment opportunities in the video game industry.",
        "tech": [
            "Vue.js",
            "Firebase",
            "Bootstrap"
        ]
    },
    {
        "id": 4,
        "name": "Bimapedia",
        "desc": "Interactive encyclopedia of video game characters featuring secure Google Authentication with Firebase.",
        "tech": [
            "React",
            "Firebase"
        ]
    }
]

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/projects")
async def projects():
    return PROJECTS

@app.post("/contact")
async def contact(payload: ContactPayload):
    return {"success": True, "data": payload}