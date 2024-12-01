import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function convertToReadableFormat(input) {
  // Convert the date string to a JavaScript Date object
  const dateObj = new Date(input)

  // Format the date into a readable format
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const readableDate = dateObj.toLocaleString("en-US", options)

  return readableDate
}
