from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')  # Enable CORS for localhost:3000

# Update MySQL configuration with correct username and password
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'beau2'  # Replace with your MySQL username
app.config['MYSQL_PASSWORD'] = 'Apples312'  # Replace with your MySQL password
app.config['MYSQL_DB'] = 'hospitaldb'

mysql = MySQL(app)

# Define route to handle form submission
@app.route('/create_patient_record', methods=['POST'])
def create_patient_record():
    # Get form data from request
    form_patientdata = request.json
    
    # Extract data from form
    first_name = form_patientdata['First_Name']
    last_name = form_patientdata['Last_Name']
    age = form_patientdata['Age']
    gender = form_patientdata['Gender']
    
    # Insert data into database
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Patient (First_Name, Last_Name, Age, Gender) VALUES (%s, %s, %s, %s)", (first_name, last_name, age, gender))
    mysql.connection.commit()
    cur.close()
    return jsonify(message='Patient record created successfully')

# This gets all the patient records.
@app.route('/get_patient_records', methods=['GET'])
def get_patient_records():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Patient")
    records = cur.fetchall()
    cur.close()
    return jsonify(records)

# This gets a single patient record instead, there's prob a better way to code this.
@app.route('/get_patient_record/<int:id>', methods=['GET'])  # Define route to accept patient ID
def get_patient_record(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Patient WHERE PatientID = %s", (id,))
    record = cur.fetchone()  # Fetch single record
    cur.close()
    if record:
        # Convert the record to a dictionary for easier serialization
        patient = {
            'PatientID': record[0],
            'First_Name': record[1],
            'Last_Name': record[2],
            'Age': record[3],
            'Gender': record[4]
        }
        return jsonify(record)
    else:
        return jsonify({})  # Return an empty object if no patient found

if __name__ == '__main__':
    app.run(debug=True)