# 📝 Simple FastAPI To-Do List

A straightforward and fast to-do list web application built with Python and FastAPI. This project demonstrates core backend principles by creating a simple API to manage tasks. All tasks are stored in memory on the server and will reset if the server restarts.

---

## ✨ Features

* **✅ Add & Delete Tasks:** Quickly add new tasks to your list and remove them when they're no longer needed.
* **✏️ Edit Tasks:** Click on a task to easily edit its content.
* **🔄 Reorder Tasks:** Simple functionality to reorder the tasks in your list.
* **✔️ Mark as Complete:** Toggle the status of a task between active and completed.

---

## 🛠️ Tech Stack

* **Backend:** Python, FastAPI
* **Server:** Uvicorn
* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Templating:** Jinja2

---

## ⚙️ Local Setup

To run this project on your local machine, follow these steps.

### Prerequisites

* Python 3.7+ installed

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/your-fastapi-todo-repo.git](https://github.com/your-username/your-fastapi-todo-repo.git)
cd your-fastapi-todo-repo
```

### 2. Create and Activate a Virtual Environment

```bash
# For macOS/Linux
python3 -m venv venv
source venv/bin/activate

# For Windows
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

Install the required Python packages from the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

*(If you don't have a `requirements.txt` file, you can create one after running `pip install fastapi "uvicorn[standard]" jinja2`)*

### 4. Run the Application

Start the development server using Uvicorn.

```bash
uvicorn main:app --reload
```

The application will be available at `http://127.0.0.1:8000`.
