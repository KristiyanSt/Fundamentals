using System.Text;
string text = Console.ReadLine();

int strength = 0;
StringBuilder sb = new StringBuilder();

for (int i = 0; i < text.Length; i++)
{
    if (text[i] == '>')
    {
        strength += int.Parse(text[i + 1].ToString());
        sb.Append(text[i]);
        continue;
    }

    if (strength > 0)
    {
        strength--;
    }
    else
    {
        sb.Append(text[i]);
    }
}
Console.WriteLine(sb);