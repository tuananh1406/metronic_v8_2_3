@echo off

rem Check if Python is installed
where python >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed. Please install Python.
    exit /b 1
)

rem Check if venv directory exists
if not exist .venv (
    echo Creating a virtual environment...
    python -m venv .venv
)

rem Activate the virtual environment
call .venv\Scripts\activate

rem Upgrade pip
python -m pip install --upgrade pip

rem Install requirements
python -m pip install -r requirements.txt

rem Parse command line arguments
set "DEBUG_FLAG="
:parse_args
if "%~1"=="" goto run_app
if "%~1"=="--debug" (
    set "DEBUG_FLAG=--debug"
) else (
    echo Unknown option: %~1
)
shift
goto parse_args

:run_app
if "%DEBUG_FLAG%"=="" (
    echo Running Flask app...
    flask --app __init__ run
) else (
    echo Running Flask app in debug mode...
    flask --app __init__ run %DEBUG_FLAG%
)
