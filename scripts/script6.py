import json

def rename_state_objects(input_file, output_file):
    # Dictionary mapping state abbreviations to full state names
    state_mapping = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District of Columbia",
        "FL": "Florida",
        "GA": "Georgia",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PA": "Pennsylvania",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"}


    with open(input_file, 'r') as file:
        senators = json.load(file)

    # Rename state keys
    renamed_senators = {}
    for state_abbr, state_senators in senators.items():
        full_state_name = state_mapping.get(state_abbr)
        if full_state_name:
            renamed_senators[full_state_name] = state_senators
        else:
            renamed_senators[state_abbr] = state_senators

    # Write renamed data to output JSON file
    with open(output_file, 'w') as file:
        json.dump(renamed_senators, file, indent=4)

    print(f'Renamed data has been written to {output_file}')

# Example usage
rename_state_objects('states3.json', 'states_headshots.json')
