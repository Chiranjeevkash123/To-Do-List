from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

# Create a FastAPI app instance
app = FastAPI()

# Mount the static files directory to serve the To-Do list app.
# The `directory` argument points to the folder where your index.html,
# style.css, script.js, and images folder are located.
# `html=True` tells StaticFiles to automatically serve 'index.html' when a
# request is made to the root URL ("/").
app.mount("/", StaticFiles(directory=Path("."), html=True), name="static")