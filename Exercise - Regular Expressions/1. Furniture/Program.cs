using System.Text.RegularExpressions;
string input;

List<string> furniture = new List<string>();
double totalMoney = 0;
string pattern = @"^>>(?<furnitureName>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)(?:\.\d+)?$";

while ((input = Console.ReadLine()) != "Purchase")
{
    Match match = Regex.Match(input, pattern);

    if (match.Success)
    {
        string furnitureName = match.Groups["furnitureName"].Value;
        double price = double.Parse(match.Groups["price"].Value);
        int quantity = int.Parse(match.Groups["quantity"].Value);

        furniture.Add(furnitureName);
        totalMoney += price * quantity;
    }
}

Console.WriteLine("Bought furniture:");
foreach(string furnitureName in furniture)
{
    Console.WriteLine(furnitureName);
}
Console.WriteLine($"Total money spend: {totalMoney:f2}");
