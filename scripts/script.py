import json

# THIS IS A SCRIPT TO ADD FEATURES TO THE GEOJSON PROGRAMATICALLY RATHER THAN MANUALLY
def add_properties_by_name(input_file, output_file, feature_properties):
    """
    Adds properties to specified features in the GeoJSON file based on their 'name' property.

    Parameters:
    - input_file (str): Path to the input GeoJSON file.
    - output_file (str): Path to the output GeoJSON file.
    - feature_properties (list of dict): List of dictionaries containing feature name and properties to add.
    """
    # Read the existing GeoJSON file
    with open(input_file, 'r') as f:
        geojson_data = json.load(f)

    # Ensure the GeoJSON has 'features'
    if 'features' not in geojson_data:
        raise ValueError("Invalid GeoJSON file: no 'features' found")

    # Add properties to features based on feature name
    for feature in geojson_data['features']:
        feature_name = feature.get('properties', {}).get('name')
        if feature_name in feature_properties:
            if 'properties' not in feature:
                feature['properties'] = {}
            feature['properties'].update(feature_properties[feature_name])

    # Write the modified GeoJSON back to a file
    with open(output_file, 'w') as f:
        json.dump(geojson_data, f, indent=2)

if __name__ == "__main__":
    # Example usage
    input_geojson = './states.geojson'
    output_geojson = './states2.geojson'
    feature_properties = {
        'feature1_name': {'new_attribute1': 'value1', 'new_attribute2': 'value2'},
        'feature2_name': {'new_attribute3': 'value3', 'new_attribute4': 'value4'},
    }

    add_properties_by_name(input_geojson, output_geojson, feature_properties)
    print(f"Properties added and new GeoJSON file saved to {output_geojson}")
