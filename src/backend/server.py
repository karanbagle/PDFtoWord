from flask import Flask, request, send_file
from flask_cors import CORS
from pdf2docx import Converter
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["https://sprightly-medovik-e5dd9a.netlify.app", "http://localhost:3000"]}})  # Enable CORS for specific origins

@app.route('/convert', methods=['POST'])
def convert_pdf_to_word():
    if 'file' not in request.files:
        return {"error": "No file provided"}, 400

    pdf_file = request.files['file']
    pdf_path = os.path.join("uploads", pdf_file.filename)
    word_path = pdf_path.replace('.pdf', '.docx')

    # Save the PDF to a temporary location
    pdf_file.save(pdf_path)

    # Convert PDF to Word
    cv = Converter(pdf_path)
    cv.convert(word_path, start=0, end=None)
    cv.close()

    # Send the converted file back to the client
    return send_file(word_path, as_attachment=True)

if __name__ == '__main__':
    os.makedirs("uploads", exist_ok=True)
    app.run(host='0.0.0.0', port=5000)
