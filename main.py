from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

# Create an instance of the FastAPI application
app = FastAPI()

# This is the core of the server. It tells FastAPI to serve all files
# from the current directory (".").
# The `html=True` argument specifically tells it to look for and serve
# `index.html` when someone visits the root URL (like http://127.0.0.1:8000).
app.mount("/", StaticFiles(directory=".", html=True), name="static")

# You can add more API endpoints here in the future if needed.
# For example:
# @app.get("/api/tasks")
# def get_tasks():
#     return {"message": "This is where your tasks would be."}