import React, {useState, useEffect} from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"


interface Props {
  id : string,
  caption : string
}

const ThemeToggle = (props : Props) => {
  const [_, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
      setDarkMode(true);
    }
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <Switch id={props.id} />
      <Label htmlFor={props.id}>{props.caption}</Label>
    </div>
  )
}

export default ThemeToggle

