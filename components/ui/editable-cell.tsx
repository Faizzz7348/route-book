"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface EditableCellProps {
  value: string | number
  onSave: (value: string | number) => void
  type?: "text" | "number"
  dataKey?: string
}

export function EditableCell({ value, onSave, type = "text", dataKey }: EditableCellProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [editValue, setEditValue] = useState(value)

  useEffect(() => {
    setEditValue(value)
  }, [value])

  const hasChanges = editValue !== value

  const handleSave = () => {
    if (!hasChanges) return
    
    let processedValue = editValue
    
    if (type === "number") {
      processedValue = parseInt(editValue.toString()) || 0
    }
    
    onSave(processedValue)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setEditValue(value)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <span
          className="cursor-pointer hover:bg-ocean-accent/10 hover:border hover:border-ocean-accent/30 rounded-lg px-2 py-1 transition-all inline-block min-w-[60px] text-center"
        >
          {value || <span className="text-muted-foreground">—</span>}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" align="center">
        <div className="space-y-3">
          <div className="text-xs font-semibold text-muted-foreground">
            Edit {dataKey || "Value"}
          </div>
          <Input
            type={type}
            value={editValue || ""}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={`Enter ${dataKey || "value"}...`}
            className="w-full h-9 text-sm"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && hasChanges) {
                handleSave()
              } else if (e.key === "Escape") {
                handleCancel()
              }
            }}
          />
          <div className="flex gap-2 justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              className="h-7 px-3 text-xs bg-red-600 hover:bg-red-700 text-white border-red-600 dark:bg-red-500 dark:hover:bg-red-600 dark:border-red-500"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={!hasChanges}
              className={`h-7 px-3 text-xs ${
                hasChanges 
                  ? "bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
              }`}
            >
              Save
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
