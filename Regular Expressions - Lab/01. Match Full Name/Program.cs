using System.Text.RegularExpressions;

string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";
string text = Console.ReadLine();

Regex regex = new Regex(pattern);

MatchCollection matches = regex.Matches(text);

Console.Write(string.Join(" ", matches));