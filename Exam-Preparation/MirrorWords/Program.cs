using System.Text.RegularExpressions;
List<string> mirrorWords = new List<string>();
string text = Console.ReadLine();

Regex regex = new Regex(@"([@|#])(?<firstText>[A-Za-z]{3,})(\1)(\1)(?<secondText>[A-Za-z]{3,})(\1)");

MatchCollection matchesHiddenText = regex.Matches(text);

for (int i = 0; i < matchesHiddenText.Count; i++)
{
    Match match = matchesHiddenText[i];

    string firstText = match.Groups["firstText"].Value;
    string secondText = match.Groups["secondText"].Value;
    string secondTextReversed = string.Empty;
    for (int s = secondText.Length - 1; s >= 0; s--)
    {
        secondTextReversed += secondText[s];
    }
    if (firstText == secondTextReversed)
    {
        mirrorWords.Add(firstText);
        mirrorWords.Add(secondText);
    }
}
if (matchesHiddenText.Count <= 0)
{
    Console.WriteLine("No word pairs found!");
}
else
{
    Console.WriteLine($"{matchesHiddenText.Count} word pairs found!");
}


if (mirrorWords.Count <= 0)
{
    Console.WriteLine("No mirror words!");
}
else
{
    Console.WriteLine("The mirror words are:");
    for (int i = 0; i < mirrorWords.Count; i += 2)
    {
        if (i == mirrorWords.Count - 2)
        {
            Console.Write(mirrorWords[i] + " <=> " + mirrorWords[i + 1]);
        }
        else
        {
            Console.Write(mirrorWords[i] + " <=> " + mirrorWords[i + 1] + ", ");
        }

    }
}

