// import Button  from "@/app/_components/Button"
import { useToast } from "@/hooks/use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
  
    return (
      <button type="submit"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </button>
    )
  }
  