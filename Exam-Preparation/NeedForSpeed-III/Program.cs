int number = int.Parse(Console.ReadLine());

Dictionary<string, List<int>> carsValues = new Dictionary<string, List<int>>();

for(int i = 0; i < number; i++)
{
    string[] carArgs = Console.ReadLine()
                       .Split("|", StringSplitOptions.RemoveEmptyEntries);

    string car = carArgs[0];
    int mileage = int.Parse(carArgs[1]);
    int fuel = int.Parse(carArgs[2]);

    carsValues.Add(car, new List<int>());
    carsValues[car].Add(fuel);
    carsValues[car].Add(mileage);

}

string command;
while((command=Console.ReadLine()) != "Stop")
{
    string[] commandArgs = command
        .Split(" : ", StringSplitOptions.RemoveEmptyEntries);

    string operation = commandArgs[0];
    string car = commandArgs[1];

    if(operation == "Drive")
    {
        int distance = int.Parse(commandArgs[2]);
        int fuel = int.Parse(commandArgs[3]);

        if (carsValues[car][0]< fuel)
        {
            Console.WriteLine("Not enough fuel to make that ride");
        }
        else
        {
            carsValues[car][1] += distance;
            carsValues[car][0] -= fuel;
            Console.WriteLine($"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed.");
            if (carsValues[car][1] >= 100000)
            {
                carsValues.Remove(car);
                Console.WriteLine($"Time to sell the {car}!");
            }
        }
    }
    else if(operation == "Refuel")
    {
        int fuel = int.Parse(commandArgs[2]);
        int additionalFuel = 0;
        
        if (carsValues[car][0] + fuel> 75)
        {
            additionalFuel = 75 - carsValues[car][0];
            carsValues[car][0] += additionalFuel;
        }
        else
        {
            additionalFuel = fuel;
            carsValues[car][0] += additionalFuel;
        }
        Console.WriteLine($"{car} refueled with {additionalFuel} liters");
    }
    else if(operation == "Revert")
    {
        int kilometers = int.Parse(commandArgs[2]);
        if (carsValues[car][1] > 0)
        {
            carsValues[car][1] -= kilometers;
            Console.WriteLine($"{car} mileage decreased by {kilometers} kilometers");
        }
        else
        {
            Console.WriteLine($"{car} mileage decreased by 0 kilometers");
        }

        if (carsValues[car][1] < 10000)
        {
            carsValues[car][1] = 10000;
        }
    }
}
foreach(var carValuesPair in carsValues)
{
    Console.WriteLine($"{carValuesPair.Key} -> Mileage: {carValuesPair.Value[1]} kms, Fuel in the tank: {carValuesPair.Value[0]} lt.");
}