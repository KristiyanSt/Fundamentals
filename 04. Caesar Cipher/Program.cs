using System.Text;

string text = Console.ReadLine();

StringBuilder cryptedWord = new StringBuilder();

foreach (char ch in text)
{
    cryptedWord.Append((char)(ch + 3));
}

Console.WriteLine(cryptedWord);
