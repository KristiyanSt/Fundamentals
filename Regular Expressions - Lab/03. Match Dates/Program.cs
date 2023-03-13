using System.Text.RegularExpressions;

string pattern = @"\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\1(?<year>\d{4})\b";
string text = Console.ReadLine();

var matched = Regex.Matches(text, pattern);

foreach (Match match in matched)
{
    string day = match.Groups["day"].Value;
    string month = match.Groups["month"].Value;
    string year = match.Groups["year"].Value;

    Console.WriteLine($"Day: {day}, Month: {month}, Year: {year}");
}

