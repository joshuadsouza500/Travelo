"use client";

import * as React from "react";
import { CalendarIcon, MapPinIcon, Search, Users } from "lucide-react";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "./Button";

export function TravelSearch() {
  const [date, setDate] = React.useState<Date>();
  const [guests, setGuests] = React.useState("1");

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full ">
      <div className="flex flex-col md:flex-row md:items-center md:divide-x">
        {/* Destination Select */}
        <div className="p-4 flex-1 ">
          <Select>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Where are you going?" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bali">Bali</SelectItem>
              <SelectItem value="goa">Georgia</SelectItem>

              <SelectItem value="Italy">Italy</SelectItem>
              <SelectItem value="Thailand">Thailand</SelectItem>
              <SelectItem value="Turkey">Turkey</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Picker */}
        <div className="p-4 flex-1 ">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                color="white"
                className={cn(
                  "w-full justify-start text-left font-normal flex items-center rounded-md border border-input  shadow-none focus:bg-accent focus:text-accent-foreground",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "When"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) =>
                  date < new Date() || date > addDays(new Date(), 120)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests Select */}
        <div className="p-4 flex-1">
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Number of guests" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="p-4">
          <Button className="w-full md:w-auto bg-orange-500 flex items-center justify-center hover:bg-orange-600">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}
