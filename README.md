
# Catalog Online Assessment

This Problem computes secrets based on Lagrange interpolation using input data from two JSON files. The interpolation is used to reconstruct a secret from a set of points, each consisting of an `x` value and a `y` value in a specific base. The `k` number of points is used to compute the secret.

## Problem Structure

The Problem consists of the following files:

- `parseBigInt.js`: Handles the conversion of a string value in a given base to a BigInt.
- `gcd.js`: Computes the greatest common divisor (GCD) needed for Lagrange interpolation.
- `computeSecret.js`: Implements the Lagrange interpolation algorithm to compute the secret from the given points.
- `main.js`: Reads input JSON files, calls the `computeSecret` function for each file, and outputs the computed secrets.

## Installation

1. Ensure you have Node.js installed on your machine. If not, download and install it from [here](https://nodejs.org/).
2. Clone the repository to your local machine or download the project files.
3. Navigate to the project directory and install the required packages (if any).

```bash
npm init -y
```

## Usage

1. Place the two input JSON files (`testCase1.json` and `testCase2.json`) in the project directory.
   - The JSON file should contain the `keys` field with the number `k` and the values should contain the points in the form of `base` and `value`.

2. To compute the secrets, run the following command:

```bash
node main.js
```

### Example Input JSON Structure

Here’s an example structure for the `testCase1.json` and `testCase2.json` files:

```json
{
  "keys": {
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "12345"
  },
  "2": {
    "base": "10",
    "value": "67890"
  },
  "3": {
    "base": "10",
    "value": "13579"
  }
}
```

### Output

The computed secrets will be printed to the console:

```bash
Secret for Test Case 1: 3
Secret for Test Case 2: 79836264049851
```

## Functions

### `parseBigInt(str, base)`
- **Description**: Converts a string value in a given base to a BigInt.
- **Parameters**:
  - `str`: The string representing the number.
  - `base`: The base in which the number is represented (e.g., 10 for decimal, 16 for hexadecimal).
- **Returns**: The BigInt value.

### `gcd(a, b)`
- **Description**: Computes the greatest common divisor (GCD) of two BigInts.
- **Parameters**:
  - `a`: The first number (BigInt).
  - `b`: The second number (BigInt).
- **Returns**: The GCD of the two numbers as a BigInt.

### `computeSecret(input)`
- **Description**: Computes the secret based on the Lagrange interpolation formula from the given input points.
- **Parameters**:
  - `input`: An object containing the keys and the points to be used for interpolation.
- **Returns**: The computed secret as a string.

