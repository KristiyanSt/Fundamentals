string message = Console.ReadLine();

string command;

while((command= Console.ReadLine()) != "Decode")
{
    string[] commandArgs = command
                            .Split("|", StringSplitOptions.RemoveEmptyEntries);

    string operation = commandArgs[0];

    if(operation == "Move")
    {
        int numberOfLetters = int.Parse(commandArgs[1]);
        string extractString = message.Substring(0, numberOfLetters);
        message = message.Remove(0,numberOfLetters);
        message = message.Insert(message.Length, extractString);
        
    }
    else if(operation== "Insert")
    {
        int index = int.Parse(commandArgs[1]);
        string value = commandArgs[2];

        message = message.Insert(index, value);
        
    }
    else if(operation == "ChangeAll")
    {
        string replacableString = commandArgs[1];
        string replacementString = commandArgs[2];

        message = message.Replace(replacableString, replacementString);
        
    }
}
Console.WriteLine($"The decrypted message is: {message}");