import json

# Load the GeoJSON file
with open('states_with_senators.geojson', 'r') as geojson_file:
    geojson_data = json.load(geojson_file)

# Load the population data JSON file
with open('muslim-population-by-state-2024.json', 'r') as population_file:
    population_data = json.load(population_file)

# Create a dictionary from the population data for easy lookup
population_dict = {entry["state"]: entry for entry in population_data}

# Add population data to the GeoJSON features
for feature in geojson_data['features']:
    state_name = feature['properties']['NAME']
    if state_name in population_dict:
        feature['properties']['MuslimPopulationEstimated'] = population_dict[state_name]['MuslimPopulationEstimated']
        feature['properties']['MuslimPopulationEstimatedPercMuslim'] = population_dict[state_name]['MuslimPopulationEstimatedPercMuslim']
    else:
        # If there's no population data for the state, you can set default values or skip
        feature['properties']['MuslimPopulationEstimated'] = None
        feature['properties']['MuslimPopulationEstimatedPercMuslim'] = None

# Save the updated GeoJSON to a new file
with open('updated_geojson_file.geojson', 'w') as updated_geojson_file:
    json.dump(geojson_data, updated_geojson_file, indent=2)
