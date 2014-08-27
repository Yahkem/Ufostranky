using System;
using System.Collections.Generic;

namespace Ufostranky.Models
{
    public class SquareShit
    {
        public byte[] Numbers { get; set; }
        public string[] Positions { get; set; }
        public byte[] EmptyCoords { get; set; }

        public SquareShit()
        {
            Numbers = new byte[15];
            List<byte> list = new List<byte> { 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15 };
            Random randomizer = new Random();

            for(byte i = 0; i < 15; ++i)
            {
                int index = randomizer.Next(0, 15 - i);
                Numbers[i] = list[index];
                list.RemoveAt(index);
            }

            MakePositions();
        }

        private void MakePositions()
        {
            bool set = false;
            Random randomizer = new Random();
            int index = 0;

            this.Positions = new string[15];
            this.EmptyCoords = new byte[2];

            for(byte i = 1; i < 5; ++i)
            {
                for(byte j = 1; j < 5; ++j)
                {
                    if (set != true && randomizer.Next(10) == 1 || set != true && i == 4 && j == 4)
                    {
                        set = true;
                        EmptyCoords[0] = i;
                        EmptyCoords[1] = j;
                        continue;
                    }
                    Positions[index++] = "f-" + i.ToString() + "-" + j.ToString();
                }
            }
        }
    }
}