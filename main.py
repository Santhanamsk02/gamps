from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

uri = "mongodb+srv://admin:admin@cluster0.o71qhsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)
db = client["Test_DB"]
collection = db["Test_Collection"]

class RegisterModel(BaseModel):
    username: str
    email: str
    password: str
    fullname: str
    college: str
    dept: str
    year: str
    domain: str

class LoginModel(BaseModel):
    username: str
    password: str

# Register Endpoint
@app.post("/register")
def register_user(data: RegisterModel):
    existing_user = collection.find_one({"username": data.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    collection.insert_one(data.dict())
    return {"message": "User registered successfully"}


# Login Endpoint
@app.post("/login")
def login_user(data: LoginModel):
    user = collection.find_one({"username": data.username})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Invalid password")
    
    return {"message": "Login successful"}
