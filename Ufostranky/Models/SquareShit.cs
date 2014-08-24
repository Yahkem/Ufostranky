using System;
using System.Collections.Generic;

namespace Ufostranky.Models
{
    public class SquareShit
    {
        public byte[] Numbers { get; set; }

        public SquareShit()
        {
            Numbers = new byte[15];
            List<byte> list = new List<byte> { 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15};
            Random randomizer = new Random();

            for(byte i = 0; i < 15; ++i)
            {
                int index = randomizer.Next(0, 15 - i);
                Numbers[i] = list[index];
                list.RemoveAt(index);
            }
        }
    }
}