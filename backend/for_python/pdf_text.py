# import PyPDF2, json
# def extract(file_name):
#     with open('file_name', 'rb') as file:
#         reader = PyPDF2.PdfReader(file)
#         text = ""
#         for page_num in range(len(reader.pages)):
#             page = reader.pages[page_num]
#             text += page.extract_text()
#         # print(text)

#         def forjson():
#             data = {
#              "text": text
#             }
#             return json(data)
        
# extract('normal.pdf')


import PyPDF2
import json

with open('normal.pdf', 'rb') as file:
    reader = PyPDF2.PdfReader(file)

    pdf_data = {}


    for page_num in range(len(reader.pages)):
        page = reader.pages[page_num]
        text = page.extract_text()
        pdf_data[f"Page{page_num + 1}"] = text

json_data = json.dumps(pdf_data, indent=4)


print(json_data)

with open('pdf_text.json', 'w') as json_file:
    json_file.write(json_data)