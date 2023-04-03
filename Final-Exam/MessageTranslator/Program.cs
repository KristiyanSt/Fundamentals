using System.Text.RegularExpressions;

int countOfinputs = int.Parse(Console.ReadLine());

for(int i = 1;i<= countOfinputs; i++)
{
    string input = Console.ReadLine();
    Regex regex = new Regex(@"(!)(?<command>[A-Z]{1,1}[a-z]{2,})(\1):\[(?<string>[A-Za-z]{8,})\]");
    Match match = regex.Match(input);
    if (!match.Success)
    {
        Console.WriteLine("The message is invalid");
    }
    else
    {
        
        string command = match.Groups["command"].Value;
        string text = match.Groups["string"].Value;
        int[] textCharCodes = new int[text.Length];

        for (int j = 0; j < text.Length; j++)
        {
            int currentCharAsCode = (int)text[j];
            textCharCodes[j] = currentCharAsCode;
        }
        Console.WriteLine($"{command}: {String.Join(" ", textCharCodes)}");
    }
}