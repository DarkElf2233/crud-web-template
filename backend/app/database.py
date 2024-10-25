from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

# DB engine
engine = create_async_engine("")
new_session = async_sessionmaker(engine, expire_on_commit=False)

# Your models and tables here.
