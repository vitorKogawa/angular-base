import { Pipe } from "@angular/core";

@Pipe({
  name: 'replace'
})

class ReplacePipe{
  transform(value: string, char: string, valueToReplace: string){
    return value.replace(char, valueToReplace)
  }
}

export { ReplacePipe }
