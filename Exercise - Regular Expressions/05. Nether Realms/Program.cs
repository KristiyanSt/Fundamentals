using System.Text.RegularExpressions;

string[] demonsInput = Regex.Split(Console.ReadLine(), @",\s{0,}")
                      .Select(x => x.Trim())
                      .ToArray();

SortedDictionary<string, Dictionary<int, double>> demonsParameters = new SortedDictionary<string, Dictionary<int, double>>();

DemonsParametersCalculation(demonsInput, demonsParameters);

PrintingDemonsParameters(demonsParameters);

static double AlterDamage(double damage, string currentDemon, string alterPattern)
{
    var alterSymbolsMatches = Regex.Matches(currentDemon, alterPattern);
    if (alterSymbolsMatches.Count > 0)
    {
        foreach (Match alterSymbolMatch in alterSymbolsMatches)
        {
            if (alterSymbolMatch.Value == "*")
            {
                damage *= 2;
            }
            else
            {
                damage /= 2;
            }
        }
    }
    return damage;
}
static double DamageCalculation(string currentDemon, string digitsPattern, string alterPattern)
{
    var digitsMatches = Regex.Matches(currentDemon, digitsPattern);
    double damage = 0;
    foreach (Match digitMatch in digitsMatches)
    {
        damage += double.Parse(digitMatch.Value);

    }
    damage = AlterDamage(damage, currentDemon, alterPattern);


    return damage;
}

static int HealthCalculation(string currentDemon, string characterPattern)
{
    var characterMatches = Regex.Matches(currentDemon, characterPattern);

    int health = 0;
    foreach (Match characterMatch in characterMatches)
    {
        health += (int)char.Parse(characterMatch.Value);
    }
    return health;
}

static void DemonsParametersCalculation(string[] demonsInput, SortedDictionary<string, Dictionary<int, double>> demonsParameters)
{
    string characterPattern = @"(?<health>[^0-9\.\+\-\*\/])";
    string digitsPattern = @"[\-\+]?\d+(\.\d+)?";
    string alterPattern = @"[\*\/]";

    for (int i = 0; i < demonsInput.Length; i++)
    {
        string currentDemon = demonsInput[i];
        int demonHealth = HealthCalculation(currentDemon, characterPattern);
        double demonDamage = DamageCalculation(currentDemon, digitsPattern, alterPattern);
        demonsParameters[currentDemon] = new Dictionary<int, double>();
        demonsParameters[currentDemon].Add(demonHealth, demonDamage);

    }
}

static void PrintingDemonsParameters(SortedDictionary<string, Dictionary<int, double>> demonsParameters)
{
    foreach (var dParams in demonsParameters)
    {
        foreach (var healthAndDamagePair in dParams.Value)
        {
            Console.WriteLine($"{dParams.Key} - {healthAndDamagePair.Key} health, {healthAndDamagePair.Value:f2} damage");
        }
    }
}