from fastapi import FastAPI

app = FastAPI(title="Finance Service")

@app.get("/")
def read_root():
    return {"service": "finance", "status": "ok"}
