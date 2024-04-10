#!/bin/bash

# Check if Python3 is installed
if ! command -v python3 &> /dev/null; then
    echo "Error: Python3 is not installed. Please install Python3."
    exit 1
fi

# Check if venv directory exists
if [ ! -d ".venv" ]; then
    echo "Creating a virtual environment..."
    python3 -m venv .venv
fi

# Activate the virtual environment
source .venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install requirements
pip install -r requirements.txt

# Parse command line arguments
DEBUG_FLAG=""
while [[ $# -gt 0 ]]; do
    key="$1"

    case $key in
        --debug)
            DEBUG_FLAG="--debug"
            shift
            ;;
        *)
            # Unknown option
            shift
            ;;
    esac
done

# Run the Flask app
if [ -z "$DEBUG_FLAG" ]; then
    echo "Running Flask app..."
    flask --app __init__ run
else
    echo "Running Flask app in debug mode..."
    flask --app __init__ run $DEBUG_FLAG
fi
