from fastapi import APIRouter, FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

import os

app = FastAPI()
router = APIRouter()

app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])
