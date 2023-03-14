using System.Diagnostics.Metrics;
using System.Text.RegularExpressions;

List<string> names = Console.ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .ToList();
               
Dictionary<string,int> participants = new Dictionary<string,int>();

Regex namePattern = new Regex(@"[A-Za-z]");
Regex distancePattern = new Regex(@"\d");

string input;
while((input = Console.ReadLine()) != "end of race")
{
    MatchCollection lettersOfName = namePattern.Matches(input);
    MatchCollection digitsOfDistance = distancePattern.Matches(input);

    string currName = string.Join("", lettersOfName);
    if (names.Contains(currName))
    {
        int currDistance = 0;
        foreach (Match match in digitsOfDistance)
        {
            currDistance += int.Parse(match.Value);
        }
        if (!participants.ContainsKey(currName))
        {
            participants.Add(currName, 0);
        }
        participants[currName] += currDistance;
    }
}

int count = 1;
foreach(var pair in participants.OrderByDescending(p => p.Value))
{
    if(count == 1)
    {
        Console.WriteLine($"1st place: {pair.Key}");
    }
    else if(count == 2)
    {
        Console.WriteLine($"2nd place: {pair.Key}");
    }
    else if(count == 3)
    {
        Console.WriteLine($"3rd place: {pair.Key}");
    }
    else
    {
        break;
    }
    count++;
}







