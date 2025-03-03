from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows frontend to communicate with the backend

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.get_json()
        expression = data.get('expression', '')

        # Basic security measure to avoid harmful code execution
        allowed_chars = "0123456789+-*/(). "
        if any(c not in allowed_chars for c in expression):
            return jsonify({'error': 'Invalid characters in expression'}), 400

        # Evaluate the expression safely
        result = eval(expression)  # Use eval with caution, prefer a safe math parser if needed
        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
