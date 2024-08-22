import { toast } from "react-toastify";

export function underDevNotify(){
    return () => toast.info("It's under development!", {theme: "colored"});
}