string initialStops = Console.ReadLine();

string command;
while((command=Console.ReadLine()) != "Travel")
{
    if(command.Contains("Add Stop"))
    {
        string[] commandArgs = command.
            Split(":", StringSplitOptions.RemoveEmptyEntries);
        int index = int.Parse(commandArgs[1]);
        string textToInsert = commandArgs[2];

        if(index>=0 && index < initialStops.Length)
        {
            initialStops = initialStops.Insert(index, textToInsert);           
        }
        Console.WriteLine(initialStops);
    }
    else if (command.Contains("Remove Stop"))
    {
        string[] commandArgs = command.
            Split(":", StringSplitOptions.RemoveEmptyEntries);

        int startIndex = int.Parse(commandArgs[1]);
        int endIndex = int.Parse(commandArgs[2]);
        if (startIndex >= 0 && startIndex < initialStops.Length &&
            endIndex >= 0 && endIndex < initialStops.Length)
        {
            int count = endIndex - startIndex + 1;
            initialStops = initialStops.Remove(startIndex, count);
        }
        Console.WriteLine(initialStops);
    }
    else if (command.Contains("Switch"))
    {
        string[] commandArgs = command.
            Split(":", StringSplitOptions.RemoveEmptyEntries);

        string oldString = commandArgs[1];
        string newString = commandArgs[2];

        if (initialStops.Contains(oldString))
        {
            string[] initialStopsArr = initialStops.Split(oldString);
            initialStops = String.Join(newString,initialStopsArr);
        }
        Console.WriteLine(initialStops);
    }
}
Console.WriteLine($"Ready for world tour! Planned stops: {initialStops}");