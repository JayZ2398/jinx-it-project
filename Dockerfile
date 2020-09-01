# Indicates that we are basing our image off a python 3 image. Allows us 
# to avoid manually installing python3, pip, etc.
FROM python:3

# This has to do with std.in/std.out
ENV PYTHONUNBUFFERED 1
# At this point our container if filled with default python packages. Therefore make
# a directory for our code to be copied to
RUN mkdir /code
# Set this new directory in our container as our work directory
WORKDIR /code
# Copy everything in the current directory to our newly initialised work directory
COPY . /code/
# Install our python package dependencies with pip, so Django, rest-api-framework etc.
RUN pip install -r requirements.txt

