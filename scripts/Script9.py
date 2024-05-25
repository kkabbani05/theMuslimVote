import json

# Read GeoJSON file
with open('updated_geojson_file.geojson', 'r') as f:
    geojson_data = json.load(f)

# List of swing states
swing_states = ['Arizona','Georgia','Michigan','Nevada','North Carolina','Pennsilvania','Wisconsin']

# Add SwingState property to each feature
for feature in geojson_data['features']:
    state_name = feature['properties']['NAME']
    if state_name in swing_states:
        feature['properties']['SwingState'] = True
    else:
        feature['properties']['SwingState'] = False

# Write the updated GeoJSON to a new file
with open('states_with_swing_state.geojson', 'w') as f:
    json.dump(geojson_data, f, indent=2)
