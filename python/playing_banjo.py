def are_you_playing_banjo(name):
    # Implement me!
    if ord(name[0]) == 82 or ord(name[0]) == 114:
        statement = f"{name} plays banjo"
    else:
        statement = f"{name} does not play banjo"
    
    return statement






print(are_you_playing_banjo("rolf"))