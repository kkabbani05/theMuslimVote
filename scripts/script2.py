import csv

def read_senators(filename):
    senators_by_state = {}
    with open(filename, 'r', newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            # Handle the case where the row doesn't contain enough values
            if len(row) >= 4:
                senator_name, state, party, class_ = row[:4]
                if state not in senators_by_state:
                    senators_by_state[state] = []
                senators_by_state[state].append((senator_name, class_))
    return senators_by_state

def write_output(senators_by_state, output_filename):
    with open(output_filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['State', 'Senator1', 'Senator1Class', 'Senator2', 'Senator2Class'])
        for state, senators in senators_by_state.items():
            if len(senators) >= 2:
                senator1, senator2 = senators[:2]
                writer.writerow([state, senator1[0], senator1[1], senator2[0], senator2[1]])

def main():
    input_filename = 'senators.csv'
    output_filename = 'senators_output.csv'
    senators_by_state = read_senators(input_filename)
    write_output(senators_by_state, output_filename)
    print(f'Successfully wrote output to {output_filename}')

if __name__ == "__main__":
    main()
