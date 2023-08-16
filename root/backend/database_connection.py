import mysql.connector

# Replace with your own database credentials
config = {
    'user': 'username',
    'password': 'password',
    'host': 'localhost:8080',  # Replace with your host (e.g., '127.0.0.1' or 'yourdomain.com')
    'database': 'your_database_name',
}

# Establish a connection to the MySQL server
connection = mysql.connector.connect(**config)

# Now you have a connection to the database

# Remember to close the connection when you're done
connection.close()
