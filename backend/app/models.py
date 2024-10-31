from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()


class Users(Base):
    __tablename__ = 'users'
    id  = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    full_name = Column(String)
    created = Column(DateTime(timezone=True), server_default=func.now())
