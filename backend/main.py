from fastapi import FastAPI
import connect_db

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/connect-db")
async def show_all():
    return {"tweets": connect_db.tweet_content}