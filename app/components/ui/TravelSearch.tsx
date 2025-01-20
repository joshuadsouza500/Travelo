"use client";

import * as React from "react";
import {
  CalendarIcon,
  ChevronDown,
  MapPinIcon,
  Search,
  Users,
} from "lucide-react";
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
    <div className="flex flex-col md:flex-row md:items-center md:divide-x rounded-xl border   shadow-sm w-full bg-white">
      {/*divide-x is used to apply a horizontal dividing line between children */}
      {/* Destination Select */}
      <div className="pt-3 py-2 px-4 md:py-4 flex-1 ">
        <Select>
          <SelectTrigger className="w-full ">
            <div className="flex items-center gap-2 xl:gap-3">
              <MapPinIcon className="size-4 xl:size-5  text-orange-600" />
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
      <div className="py-2 px-4 md:py-4 flex-1 ">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              color="white"
              className={cn(
                "w-full  text-left  hover:scale-100 flex rounded-none items-center  focus:border-b border-orange-600/50   shadow-none focus:bg-accent focus:text-accent-foreground hover:bg-white text-sm font-bold  justify-between",
                !date && "text-muted-foreground "
              )}
            >
              <div className="flex items-center">
                <CalendarIcon className="mr-2 xl:mr-3 size-4 md:size-5 text-orange-600" />
                {date ? format(date, "PPP") : "When"}
              </div>
              <ChevronDown className="h-4 w-4 opacity-50 text-muted-foreground " />
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
      <div className="py-2 px-4 md:py-4 flex-1">
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2 xl:gap-3">
              <Users className="size-4 md:size-5 text-orange-600" />
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
      <div className="p-4 md:bg-orange-500   text-white rounded-r-xl md:hover:bg-orange-600 group">
        <button className="w-full md:w-auto bg-orange-500 flex items-center justify-center group-hover:bg-orange-600  rounded-md     px-3 lg:px-6 py-2 font-sans font-medium h z-10 relative  ">
          <Search className="mr-2 h-4 w-4" /> Search
        </button>
      </div>
    </div>
  );
}
