import csv
import json

def read_csv(filename):
    """
    Reads a CSV file and returns a list of dictionaries, where each dictionary represents a row in the CSV.
    """
    data = []
    with open(filename, 'r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return data

def write_json(data, filename):
    """
    Writes data to a JSON file.
    """
    with open(filename, 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

def main():
    input_filename = 'data\senatorslong3.csv'
    output_filename = 'senatorslong3.json'

    # Read data from CSV file
    senators_data = read_csv(input_filename)

    # Write data to JSON file
    write_json(senators_data, output_filename)
    print(f'Successfully converted CSV to JSON. Output saved to {output_filename}')

if __name__ == "__main__":
    main()
