import json

def organize_senators_by_state(senators):
    states = {}
    for senator in senators:
        state_abbreviation = senator.get('State')
        if state_abbreviation:
            if state_abbreviation not in states:
                states[state_abbreviation] = {
                    'abbreviation': state_abbreviation,
                    'senators': []
                }
            states[state_abbreviation]['senators'].append({
                'name': senator.get('Senator', ''),
                'party': senator.get('Party', ''),
                'class': senator.get('Class', '')
            })
    return list(states.values())

def main():
    try:
        # Read senator data from JSON file
        with open('scripts\senatorslong.json', 'r') as file:
            senators = json.load(file)
    except FileNotFoundError:
        print("Error: senators.json file not found.")
        return
    except json.JSONDecodeError:
        print("Error: Unable to decode JSON file.")
        return

    # Organize senators by state
    states = organize_senators_by_state(senators)

    # Write organized data to JSON file
    with open('states.json', 'w') as file:
        json.dump(states, file, indent=4)

    print('Organized data has been written to states.json')

if __name__ == "__main__":
    main()
