


export type Toms = {
    chapsters: Array<Chapter>;
    volume: string;
}

export type Chapter = {
    chapter: string;
    is: string;
}


export async function ReadingManga() {
    // try {
    //     const arrayChapters: Toms[] = [];
    //     const response = await fetch(`https://api.mangadex.org/manga/a1c7c817-4e59-43b7-9365-09675a149a6f/aggregate`, {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //         },
    //     });

    //     const user = await response.json();
    //     if (response.ok || response.status === 200) {


    //         return user.volumes;
    //     }




    // } catch (e) {
    //     console.log(`Error ${e}`)
    // }


    
}


export async function PageManga(id: string) {
    try {
        const response = await fetch(`https://api.mangadex.org/chapter/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        });

        const user = await response.json();
        if (response.ok || response.status === 200) {


            return user.data.attributes.pages;
        }




    } catch (e) {
        console.log(`Error ${e}`)
    }
}