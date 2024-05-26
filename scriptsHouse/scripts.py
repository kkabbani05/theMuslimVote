import csv
import json
import os

def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV and add data to a dictionary
    data = []
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)
    
    # Write the dictionary to a JSON file
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

if __name__ == "__main__":
    # Define the path to the CSV file
    csv_file_path = "scriptsHouse\CAIR 2024 Congressional Scorecard_House.csv"
    # Define the path to the output JSON file
    json_file_path = 'output.json'
    
    # Check if the input CSV file exists
    if not os.path.exists(csv_file_path):
        print(f"The file {csv_file_path} does not exist.")
    else:
        # Convert CSV to JSON
        csv_to_json(csv_file_path, json_file_path)
        print(f"CSV file {csv_file_path} has been converted to JSON file {json_file_path}.")
