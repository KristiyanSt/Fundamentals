using System.Text.RegularExpressions;

string pattern = @"(?:^|\s)\+359( |-)2\1\d{3}\1\d{4}\b";
string text = Console.ReadLine();

string[] matched = Regex.Matches(text, pattern)
    .Cast<Match>()
    .Select(a => a.Value.Trim())
    .ToArray();

Console.WriteLine(string.Join(", ", matched));