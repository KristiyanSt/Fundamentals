using System.Text.RegularExpressions;
using System.Text;
int n = int.Parse(Console.ReadLine());
List<string> attackedPlanets = new List<string>();
List<string> destroyedPlanets = new List<string>();


for(int i = 0; i < n; i++)
{
    string input = Console.ReadLine();
    var lettersMatches = Regex.Matches(input, @"[starSTAR]");
    int countOfLetters = lettersMatches.Count;
    
    StringBuilder manipulatedInput = new StringBuilder();

    foreach(char ch in input)
    {
        manipulatedInput.Append((char)(ch - countOfLetters));
    }
    Match planetMatch = Regex.Match(manipulatedInput.ToString(), @"@(?<planetName>[A-Z][a-z]+)[^@\-!:>]{0,}:(?<population>\d+)[^@\-!:>]{0,}!(?<attackType>[AD])![^@\-!:>]{0,}\-\>(?<soldierCount>\d+)");
    if (planetMatch.Success)
    {
        string planetName = planetMatch.Groups["planetName"].Value;
        char attackType = char.Parse(planetMatch.Groups["attackType"].Value);
        
        if(attackType == 'A')
        {
            attackedPlanets.Add(planetName);
        }
        else
        {
            destroyedPlanets.Add(planetName);
        }
    }
}
PrintingPlanets(attackedPlanets, "Attacked");
PrintingPlanets(destroyedPlanets, "Destroyed");
static void PrintingPlanets(List<string>planets, string type)
{
    Console.WriteLine($"{type} planets: {planets.Count}");

    foreach (string name in planets.OrderBy(p => p))
    {
        Console.WriteLine($"-> {name}");
    }
}

