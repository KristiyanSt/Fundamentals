using System.Text.RegularExpressions;

string input = Console.ReadLine();
List<string> destinations = new List<string>();
MatchCollection matches = Regex.Matches(input, @"(\=|\/)(?<location>[A-Z][A-Za-z]{2,})\1");
int travelPoints = 0;
foreach(Match match in matches)
{
    destinations.Add(match.Groups["location"].Value);
    travelPoints += match.Groups["location"].Value.Length;
}

Console.WriteLine($"Destinations: {string.Join(", ", destinations)}");
Console.WriteLine($"Travel Points: {travelPoints}");