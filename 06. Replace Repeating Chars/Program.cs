using System.Text;

string text = Console.ReadLine();
StringBuilder sb = new StringBuilder();

for (int i = 1; i < text.Length; i++)
{

    if (text[i] != text[i - 1])
    {
        sb.Append(text[i - 1]);
    }

}
sb.Append(text.Last());
Console.WriteLine(sb);