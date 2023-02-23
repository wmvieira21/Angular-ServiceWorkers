import { Pipe, PipeTransform } from "@angular/core";
import { PostModel } from "./postNews.model";

@Pipe({
    name: 'filterNewsPipe',
    pure: false
})

export class FilterPipe implements PipeTransform {

    transform(array: PostModel[], inputText: string) {
        if (array) {
            if (inputText.length > 0) {
                let listfiltered: PostModel[] = [];

                array.forEach(element => {
                    if ((element.title as string).includes(inputText, 0)) {
                        listfiltered.push(element)
                    }
                })
                return listfiltered;
            } else {
                return array;
            }
        }
        return array;
    }
}