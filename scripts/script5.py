import json

def organize_senators_by_state(senators):
    states = {}
    for senator in senators:
        state_abbreviation = senator.get('State')
        if state_abbreviation:
            if state_abbreviation not in states:
                states[state_abbreviation] = []
            states[state_abbreviation].append(senator)
    return states

def main():
    # Load senators from JSON file or provide the array directly
    with open('senatorslong3.json', 'r') as file:
        senators = json.load(file)

    # Organize senators by state
    states = organize_senators_by_state(senators)

    # Write organized data to JSON file
    with open('states3.json', 'w') as file:
        json.dump(states, file, indent=4)

    print('Organized data has been written to states.json')

if __name__ == "__main__":
    main()
