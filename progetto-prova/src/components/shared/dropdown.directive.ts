import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective {

    constructor(private elementRef: ElementRef) {}
    
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

    //ascolto il click su tutto il documento
    @HostListener('document:click', ['$event']) closeDropdown(event: Event){ 
        //Se l'elemento clickato non fa parte del dropdown allora chiudi il menu'
        if(!this.elementRef.nativeElement.contains(event.target)){
            this.isOpen=false;
        }
    }
}