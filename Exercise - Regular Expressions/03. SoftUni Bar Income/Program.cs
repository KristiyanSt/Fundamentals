using System.Text.RegularExpressions;

Regex regex = new Regex(@"%(?<customerName>[A-Z][a-z]+)%.*<(?<product>\w+)>.*\|(?<count>\d+)\|(?<price>[\d\.]+)\$");
Dictionary<string, Dictionary<string, double>> data = new Dictionary<string, Dictionary<string, double>>();

double totalIncome = 0;
string input;
while((input = Console.ReadLine()) != "end of shift")
{
    Match match = regex.Match(input);
    if (match.Success)
    {
        string customerName = match.Groups["customerName"].Value;
        string product = match.Groups["product"].Value;
        int count = int.Parse(match.Groups["count"].Value);
        double price = double.Parse(match.Groups["price"].Value);
        double sum = count * price;
        totalIncome += sum;
        data[customerName] = new Dictionary<string, double>();
        data[customerName].Add(product, sum);
    }
}

foreach(var kvp in data)
{
    foreach(var productAndPrice in kvp.Value)
    {
        Console.WriteLine($"{kvp.Key}: {productAndPrice.Key} - {productAndPrice.Value:f2}");
    }   
}
Console.WriteLine($"Total income: {totalIncome:f2}");