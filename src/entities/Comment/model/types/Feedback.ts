import { User } from "@/entities/User"

export interface Feedback {
    id: string          
    score: number   
    text: string 
    event_id: string  
    event: Event        
    user_id: string       
    user: User          
    specialist_id: string 
    specialist: Specialist    
  
    created_at: string 
    updated_at: string 
}