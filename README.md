# Quiz5 
DjangoBackEnd+ReadMe: Jan Raphael Macabulos
ReactFrontEnd: Madeleine Palacol Agbayani

This is the **backend** for the Quiz5 project, built with **Django REST Framework (DRF)** and **JWT authentication**.

## How to Run the Backend
-python -m venv venv
-source venv/bin/activate  # Mac/Linux
-venv\Scripts\activate  # Windows
-pip install -r requirements.txt

### Clone the Repository
-git clone https://github.com/Jan-Raphael/Quiz5AgbayaniMacabulos.git
-cd Quiz5AgbayaniMacabulos/backend
-python manage.py migrate
-python manage.py runserver
The server will start at http://127.0.0.1:8000/

## Authentication Instructions ##
Login at /api/accounts/login/ to get an access and refresh token.
Include the access token in API requests using Bearer authentication:
makefile
Copy
Edit
Authorization: Bearer your_access_token
If your token expires, refresh it using /api/accounts/token/refresh/.
