
"use client"
import {useRouter} from 'next/navigation'

export function navigate (name){
    const router = useRouter()
   return  router.push(name)
}