'use client'
import * as React from 'react'
import {TabsContent} from "@/components/ui/tabs"
export function Skills(props:any){
return (
//Separate this component for easy editing and reuse
//Makes it easy to use object js files to add data in the future
<TabsContent value={props.name} className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {props.lang.map(
                    (skill:any) => (
                      <div key={skill.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                        <img src={skill.img} className="h-6 w-6" />
                        <span>{skill.name}</span>
                      </div>
                    ),
                  )}
                </div>
</TabsContent>);
}