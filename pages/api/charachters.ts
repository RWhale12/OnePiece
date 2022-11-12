import { useState } from "react";

export type Charachter = {
  id: number;
  name: string;
  role?: string;
  img?: string;
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

      user.map((el: any) => {
        if (arrayCharachters.length < 10)
          arrayCharachters.push({
            id: el.id,
            name: el.french_name,
            role: el.job,
          })
      })
      return arrayCharachters;
    }


  } catch (e) {
    console.log(`Error ${e}`)
  }
}


export async function ReadingAllCharachters() {
  try {
    const arrayCharachters: Charachter[] = [];
    const response = await fetch(`https://api.jikan.moe/v4/anime/21/characters`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
    });

    const user = await response.json();
    if (response.ok || response.status === 200) {

      user.data.map((el: any) => {
          arrayCharachters.push({
            id: el.character.mall_id,
            name: el.character.name,
            img: el.character.images.jpg.image_url,
          })
      })
      console.log(arrayCharachters)
      return arrayCharachters;
    }


  } catch (e) {
    console.log(`Error ${e}`)
  }
}
