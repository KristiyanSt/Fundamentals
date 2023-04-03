string stringToManipulate = Console.ReadLine();

string command = string.Empty;

while((command= Console.ReadLine()) != "Done")
{
    string[] commandArgs = command.
        Split(" ", StringSplitOptions.RemoveEmptyEntries);

    string operation = commandArgs[0];
    if(operation== "Change")
    {
        char charToReplace = char.Parse(commandArgs[1]);
        char replacement = char.Parse(commandArgs[2]);

        if (stringToManipulate.Contains(charToReplace))
        {
            stringToManipulate = stringToManipulate.Replace(charToReplace, replacement);
            Console.WriteLine(stringToManipulate);
        }
    }
    else if(operation == "Includes")
    {
        string substring = commandArgs[1];
        if (stringToManipulate.Contains(substring))
        {
            Console.WriteLine("True");
        }
        else
        {
            Console.WriteLine("False");
        }
    }
    else if(operation == "End")
    {
        string substring = commandArgs[1];
        int index = 0;
        if(stringToManipulate.Length == substring.Length)
        {
            index = stringToManipulate.Length - substring.Length;
        }
        else
        {
            index = stringToManipulate.Length - substring.Length - 1;
        }       
        string extract = stringToManipulate.Substring(index);

        if(substring == extract)
        {
            Console.WriteLine("True");
        }
        else
        {
            Console.WriteLine("False");
        }
    }
    else if(operation == "Uppercase")
    {
        stringToManipulate = stringToManipulate.ToUpper();
        Console.WriteLine(stringToManipulate);
    }
    else if(operation == "FindIndex")
    {
        char occurence = char.Parse(commandArgs[1]);
        int index = stringToManipulate.IndexOf(occurence);
        Console.WriteLine(index);
    }
    else if(operation == "Cut")
    {       
        int startIndex = int.Parse(commandArgs[1]);
        int count = int.Parse(commandArgs[2]);
        string substring = stringToManipulate.Substring(startIndex, count);
        Console.WriteLine(substring);
    }
}