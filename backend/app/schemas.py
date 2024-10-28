from pydantic import BaseModel

# Your schemas here.

# Authentication
class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
