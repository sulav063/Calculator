from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data.get("expression", "")

    try:
        # Safe evaluation of mathematical expressions
        result = eval(expression, {"__builtins__": {}}, {})
        return jsonify({"result": result})
    except:
        return jsonify({"result": "Error"})

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0')
