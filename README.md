# find-item
A utility package to find an item that matches a condition from an array.

## Search Algorithms
`find-item` currently only supports 2 search algorithms:

### Linear
Linear can be called like this: `findItem.linear(array here, function to check if matches condition here, get all matches or the first, "all", "first")`.
If you choose the `all` option, it will return an array, which will contain the indexes of the values that match the condition. If no values are found, an empty array will be given.
If you choose the `first` option, it will return a single number which is the index of the first value found. If no values are found, -1 will be returned.

### Binary
Binary can be called like this: `findItem.binary(array here, number here)`.
This will return the index of location of the number. If it is not found, it will return -1.
