FROM python:3.12-bullseye

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000