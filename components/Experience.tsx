import * as React from 'react'

export function Experience(props:any){
    return(
                <div key = {props.id} className="relative pl-8 border-l border-border">
                  <div className={`absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full ${props.color}`}></div>
                  
                  {props.title}
                  {props.location}
                  {props.duration}
                  {props.description}
                </div>

                
    )
}