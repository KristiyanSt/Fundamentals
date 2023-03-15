using System.Text.RegularExpressions;

string input = Console.ReadLine();

MatchCollection matches = Regex.Matches(input, @"(^|(?<=\s))([a-z\d]+[\.\-_]?[a-z\d]+)+\@([a-z]+[\-\.]?)+(\.[a-z]+)\b");

foreach(Match match in matches)
{
    Console.WriteLine(match.Value);
}