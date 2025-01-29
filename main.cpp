#include <iostream>
#include <fstream>
#include <vector>
#include <map>
#include <json/json.h>
#include <cmath>

using namespace std;

typedef long long ll;

// Function to decode value from given base
ll decodeValue(int base, const string &value) {
    return stoll(value, nullptr, base);
}

// Function to perform Lagrange interpolation to find the constant term
ll lagrangeInterpolation(const vector<pair<int, ll>> &points, int k) {
    double result = 0;
    for (int i = 0; i < k; i++) {
        double term = points[i].second;
        for (int j = 0; j < k; j++) {
            if (i != j) {
                term *= (0 - points[j].first) / (double)(points[i].first - points[j].first);
            }
        }
        result += term;
    }
    return ll(round(result));
}

// Function to read JSON input and extract required values
void readInput(const string &filePath, int &k, vector<pair<int, ll>> &points) {
    ifstream file(filePath);
    Json::Value data;
    file >> data;
    
    k = data["keys"]["k"].asInt();
    for (const auto &key : data.getMemberNames()) {
        if (key == "keys") continue;
        int x = stoi(key);
        int base = data[key]["base"].asInt();
        ll y = decodeValue(base, data[key]["value"].asString());
        points.emplace_back(x, y);
    }
}

int main() {
    int k1, k2;
    vector<pair<int, ll>> points1, points2;
    
    // Read first test case
    readInput("testcase1.json", k1, points1);
    cout << "Secret 1: " << lagrangeInterpolation(points1, k1) << endl;
    
    // Read second test case
    readInput("testcase2.json", k2, points2);
    cout << "Secret 2: " << lagrangeInterpolation(points2, k2) << endl;
    
    return 0;
}
