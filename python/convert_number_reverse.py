from unicodedata import digit


def digitize(n):
    str_n = str(n)
    str_array = []
    n_array_reversed = []
    for i in range(len(str_n)):
        str_array.append(int(str_n[i]))
    for i in reversed(range(len(str_array))):
        n_array_reversed.append(str_array[i])
    return n_array_reversed

digitize(1234)