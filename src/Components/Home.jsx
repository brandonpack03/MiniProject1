import {useState} from "react";
export default function Home(){

    const [selectedItem, setSelectedItem] =useState("");
    const cars = [
        { id: 1, make: "BMW", model: "328i", year: 2015 },
        { id: 2, make: "Toyota", model: "4Runner", year: 2020 },
        { id: 3, make: "Honda", model: "Civic", year: 2018 },
        { id: 4, make: "Ford", model: "Mustang", year: 2022 },
        { id: 5, make: "Chevrolet", model: "Camaro", year: 2019 },
        { id: 6, make: "Nissan", model: "Altima", year: 2021 },
        { id: 7, make: "Hyundai", model: "Elantra", year: 2017 },
        { id: 8, make: "Kia", model: "Sorento", year: 2023 },
        { id: 9, make: "Volkswagen", model: "Jetta", year: 2016 },
        { id: 10, make: "Subaru", model: "Outback", year: 2024 }
      ];
    return(
      <div className="flex items-center justify-center gap-4 p-4">
        <div className="border-2 p-4">
            <h2 className="text-3xl font-bold">Car List</h2>            <ul>
                {cars.map((car) => (
                    <li key={car.id}
                    onClick={() => setSelectedItem(car)}>
                        {car.make}
                    </li>
                ))}
            </ul>
        </div>
        <div className="border-2 p-4">
            <h2 className="text-3xl font-bold">Car Info</h2>            {selectedItem ? (
                <h1 className="text-2xl">
                    <p>Make: {selectedItem.make}</p>
                    <p>Model: {selectedItem.model}</p>
                    <p>Year: {selectedItem.year}</p>
                </h1>
            ): 
            ( <h1 className="text-2xl text-gray-400">Click a car to see it's details</h1>)
            }
        </div>
      </div>
                
    );
    }