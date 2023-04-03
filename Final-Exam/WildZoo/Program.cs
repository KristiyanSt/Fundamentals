using System.Formats.Asn1;
using System.Globalization;

string line = string.Empty;
Dictionary<string,Animal > animals = new Dictionary<string,Animal>();

while ((line = Console.ReadLine()) != "EndDay")
{
    string[] commandArgs = line
        .Split(" ", StringSplitOptions.RemoveEmptyEntries);

    string operation = commandArgs[0];
    if (operation == "Add:")
    {
        string[] animalArgs = commandArgs[1]
            .Split("-", StringSplitOptions.RemoveEmptyEntries);
        string name = animalArgs[0];
        int neededFood = int.Parse(animalArgs[1]);
        string area = animalArgs[2];
        Animal currentAnimal = new Animal(name, area, neededFood);

        if (!animals.ContainsKey(name))
        {
            animals[name] = currentAnimal;
        }
        else
        {
            animals[name].NeededFood += neededFood;
        }     
    }
    else if(operation == "Feed:")
    {
        string[] animalArgs = commandArgs[1]
            .Split("-", StringSplitOptions.RemoveEmptyEntries);
        string name = animalArgs[0];
        int feedingFood = int.Parse(animalArgs[1]);

        if (animals.ContainsKey(name))
        {
            animals[name].NeededFood -= feedingFood;
            if (animals[name].NeededFood <= 0)
            {
                animals.Remove(name);
                Console.WriteLine($"{name} was successfully fed");
            }
        }
        else
        {
            continue;
        }
    }
}
Console.WriteLine("Animals:");
foreach (var kvp in animals)
{
    Console.WriteLine($" {kvp.Key} -> {kvp.Value.NeededFood}g");
}
Dictionary<string, int> areasWithHungryAnimals = new Dictionary<string, int>();
foreach(var kvp in animals.Where(kvp=>kvp.Value.NeededFood > 0))
{
    string currentArea = kvp.Value.Area;
    if (!areasWithHungryAnimals.ContainsKey(currentArea))
    {
        areasWithHungryAnimals[currentArea] = 0;
    }
    areasWithHungryAnimals[currentArea] += 1;
}
Console.WriteLine("Areas with hungry animals:");
foreach(var kvp in areasWithHungryAnimals)
{
    Console.WriteLine($" {kvp.Key}: {kvp.Value}");
}

class Animal
{

    public Animal(string name, string area, int neededFood)
    {
        this.Name = name;
        this.Area = area;
        this.NeededFood = neededFood;
    }
    public string Name { get; set; }
    public string Area { get; set; }
    public int NeededFood { get; set; }
}