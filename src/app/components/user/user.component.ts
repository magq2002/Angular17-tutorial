import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemsService } from '../../core/operating-systems.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string="";//recibe propiedad de un componente padre
  @Output() greet : EventEmitter<string> = new EventEmitter<string>();//envia propiedad a componente padre
  operatingSystemsService: OperatingSystemsService = inject(OperatingSystemsService);//consumiendo un servicio
  operatingSystems: OperatingSystem[] = this.operatingSystemsService.getOperatingSystems();
  username: string = "Miguel";
  doesUserExists: boolean = false;
  isEditable: boolean = true;

  onMouseOver(osName: string):void{
    console.log(osName);
  }
  emitToParent():void{
    this.greet.emit("Hi I'm your child");
  }
}
