from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import connect_db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/connect-db")
async def show_all():
    return {"tweets": connect_db.tweet_content}