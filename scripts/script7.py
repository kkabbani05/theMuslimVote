import json

# Read GeoJSON file
with open('PRESERVE\states.geojson', 'r') as f:
    geojson_data = json.load(f)

# Read JSON file containing senators' information
with open('states_headshots.json', 'r') as f:
    senators_data = json.load(f)

# Create a dictionary to map state names to senators
senators_map = {}
for state_name, senators_info in senators_data.items():
    senators_map[state_name] = senators_info

# Add senators' information as attributes to each state feature
for feature in geojson_data['features']:
    state_name = feature['properties']['NAME']
    senators = senators_map.get(state_name)
    if senators:
        feature['properties']['senators'] = senators

# Write the updated GeoJSON to a new file
with open('states_with_senators.geojson', 'w') as f:
    json.dump(geojson_data, f)
