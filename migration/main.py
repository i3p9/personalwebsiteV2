def generate_resolutions(width, height):
    resolutions = []

    # Calculate the aspect ratio
    aspect_ratio = width / height

    # Add the original width and height
    resolutions.append((width, height))

    # Generate resolutions by scaling down the width and height
    while width >= 2 and height >= 2:
        width //= 2
        height //= 2

        # Round the width and height to the nearest integer while preserving the aspect ratio
        if abs(width / height - aspect_ratio) > abs(
            (width + 1) / height - aspect_ratio
        ):
            width += 1

        resolutions.append((width, height))

    return resolutions


width = 1080
height = 809

resolutions = generate_resolutions(width, height)

# Print the list of resolutions
for resolution in resolutions:
    print(f"{resolution[0]} x {resolution[1]}")
