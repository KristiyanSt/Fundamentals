using System.Text;
string number = Console.ReadLine();
int multiplier = int.Parse(Console.ReadLine());

StringBuilder sb = new StringBuilder();
int remainder = 0;
if (multiplier != 0)
{
    for (int i = number.Length - 1; i >= 0; i--)
    {
        int currDigit = int.Parse(number[i].ToString());

        int result = currDigit * multiplier + remainder;
        remainder = 0;



        if (i == 0)
        {
            sb.Insert(0, result);
            break;
        }

        if (result > 9)
        {
            sb.Insert(0, result % 10);
            remainder = result / 10;
        }
        else
        {
            sb.Insert(0, result);
        }

    }
}
else
{
    sb.Insert(0, 0);
}

Console.WriteLine(sb);