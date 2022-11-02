import { useState } from "react";

export type Charachter = {
  id: number;
  name: string;
  role: string;
}


export async function ReadingCharachters() {
  try {
    const arrayCharachters: Charachter[] = [];
    const response = await fetch(`https://api.api-onepiece.com/characters`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
    });

    const user = await response.json();
    if (response.ok || response.status === 200) {
      user.map((charachter: any) => {
        if (arrayCharachters.length < 10)
          arrayCharachters.push({
            id: charachter.id,
            name: charachter.french_name,
            role: charachter.job,
          })

      });
      return arrayCharachters;
    }


  } catch (e) {
    console.log(`Error ${e}`)
  }
}
